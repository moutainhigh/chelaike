# frozen_string_literal: true
module Chelaike
  class CarService
    class << self
      def fetch_by_ids(ids, company_id)
        need_fetch_ids = ids.select { |id| !Rails.cache.exist? "chelaike/car/#{id}" }

        unless need_fetch_ids.empty?
          cars = Chelaike::FetchService.get(
            "/cars/fetch_by_ids",
            company_id,
            ids: need_fetch_ids
          ).data

          cars.each do |car|
            Rails.cache.write("chelaike/car/#{car.id}", car, expires_in: 3.minutes)
          end
        end
        ids.select { |id| Rails.cache.exist? "chelaike/car/#{id}" }
           .map { |id| Rails.cache.read "chelaike/car/#{id}" }
      end

      def find(id, company_id)
        cars = fetch_by_ids([id], company_id)
        if cars.empty?
          raise ActiveRecord::RecordNotFound,
                "Couldn't find Car with 'id'=#{id}, 'company_id'=#{company_id}"
        end
        cars[0]
      end

      def query(conditions, company_id)
        result = Chelaike::FetchService.get("/cars", company_id, conditions)
        result.tap { result.data = fetch_by_ids(result.data, company_id) }
      end

      def similar(conditions, company_id)
        result = Chelaike::FetchService.get("/cars/similar", company_id, conditions)
        result.tap { result.data = fetch_by_ids(result.data, company_id) }
      end

      def similar_count(conditions, company_id)
        result = Chelaike::FetchService.get("/cars/similar", company_id, conditions)
        result.total
      end

      def subscribe(company_id, enquiry_params)
        query_params = {
          buyer_appointment: {
            customer_phone: enquiry_params[:phone],
            customer_name: enquiry_params[:name]
          }
        }

        car_id = enquiry_params[:car_id]
        Chelaike::FetchService.get("/cars/#{car_id}/subscribe", company_id, query_params)
      end

      # 得到老司机查询报告,并实例化这个保险理赔记录
      def insurance_record(car_id)
        api_url = "/cars/#{car_id}/insurance_record"

        result = Chelaike::FetchService.get(
          api_url, nil, nil, false
        ).fetch(:data)

        return unless result

        insurance_record = InsuranceRecord.initialize_with_result(car_id, result)
        { response_result: result, insurance_record: insurance_record }
      end

      def maintenance_summary(id, company_id)
        Chelaike::FetchService.get("/cars/#{id}/maintenance_summary", company_id)["data"]
                              .presence
      end

      def maintenance_detail(id, company_id)
        Chelaike::FetchService.get("/cars/#{id}/maintenance_detail", company_id)["data"]
                              .presence
      rescue RestClient::NotFound
        nil
      end

      def update(car_params, company_id)
        car_id = car_params[:id]
        Chelaike::FetchService.patch("/cars/#{car_id}", company_id, car_params)
      end

      # 获取车辆检测报告
      def detection_report(car_id, company_id)
        Chelaike::FetchService.get("/cars/#{car_id}/detection_report", company_id, company_id)
      end

    end
  end
end
