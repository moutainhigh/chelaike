require "rails_helper"

RSpec.describe Dw::Analysis::Age do
  fixtures :all

  let(:tianche) { companies(:tianche) }
  let(:analysis) { Dw::Analysis::Age.new(tianche.id) }
  let(:acquired_at_conditions) { analysis.acquired_at_conditions(Time.zone.now, "day") }
  let(:stock_out_at_conditions) { analysis.stock_out_at_conditions(Time.zone.now, "day") }
  let(:car_ids_conditions) { { car_id_in: analysis.stock_by_month_car_ids(Time.zone.now) } }

  describe "#stock_info" do
    before do
      travel_to Time.zone.parse("2015-01-01")
    end

    it "shows info by age" do
      result = analysis.stock_info(acquired_at_conditions)

      expected_result = {
        age_range: "1年以内",
        acquisition_count: 1,
        acquisition_amount: 20.0,
        cars_count_proportion: "100.0%",
        acquisition_amount_proportion: "100.0%",
        average_acquisition_amount: 20.0
      }

      expect(result.first).to eq expected_result
    end
  end

  describe "out of stock info" do
    before do
      travel_to Time.zone.parse("2015-01-20")
      Car.update_all(state: :sold)
    end

    it "shows info by age" do
      result = analysis.out_of_stock_info(stock_out_at_conditions)

      expected_result = {
        age_range: "1年以内",
        out_stock_count: 1,
        average_out_stock_amount: 30.0,
        out_stock_amount: 30.0,
        gross_profit: 0.0,
        gross_profit_rate: "0.0%",
        out_stock_amount_proportion: "100.0%",
        cars_count_proportion: "100.0%"
      }
      expect(result.first).to eq expected_result
    end
  end
end
