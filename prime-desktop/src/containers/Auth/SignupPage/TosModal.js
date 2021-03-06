/*eslint-disable */
import React, { Component, PropTypes } from 'react'
import { Modal } from 'antd'
import { connectModal } from 'redux-modal'

@connectModal({ name: 'tos' })
export default class TosModal extends Component {
  static propTypes = {
    show: PropTypes.bool.isRequired,
    handleHide: PropTypes.func.isRequired
  }


  render() {
    const { show, handleHide } = this.props

    return (
      <Modal
        title="车来客服务协议"
        width={950}
        maskClosable={false}
        visible={show}
        onCancel={handleHide}
        onOk={handleHide}
      >
        <div className="content">
          <p>
            本协议是由您（以下简称甲方）与杭州天车网络技术有限公司（以下简称乙方）就甲方使用车来客服务相关事项所订立的有效合约。甲方通过网络页面点击确认或以其他双方认可的方式选择接受本协议，且认可乙方通过向甲方在填写签约信息时预留的联系邮箱发送的对甲方所属行业及经营内容的判定，即表示甲方与乙方已达成本协议并同意接受本协议的全部约定内容，若您对上述所属行业及经营内容的判定或本协议内容有任何异议或不解，请勿点击确认。
          </p>

          <h3 className="ui header">
            第一条 相关定义
          </h3>

          <p>
            除上下文文义另有所指外，本合同中下列用语具有如下含义：
          </p>

          <p>
            1.1 车来客服务：乙方向甲方所提供的“车来客”软件系统及其附随提供的款项收付服务。
          </p>

          <p>
            1.2 车来客账户：指甲方在使用本合同约定的“车来客服务”时，乙方向其提供的唯一识别编号。甲方可为其设置密码、配置子账户，并具体使用“车来客服务”开展企业内部相关业务的管理和查询操作。
          </p>

          <p>
            1.3 车来客商家开放接口：指乙方开发的“车来客”软件系统的软件接口，与甲方网站的软件系统对接后，即可通过甲方网站使用“车来客服务”。乙方将依据甲方在确定本协议时所使用的车来客账户与车来客接口绑定。
          </p>

          <p>
            1.4 甲方用户：在甲方网站完成会员注册或者与甲方直接进行交易的用户。
          </p>

          <h3 className="ui header">
            第二条 服务内容
          </h3>

          <p>
            2.1 乙方向甲方提供以下服务：
          </p>

          <p>
            2.1.1 安全加密
            <br />
            为甲方使用乙方的服务提供高质量的网络传输加密通道，并为甲方提供信息传输的接口规范、配置安全传输协议、后台管理权限设定等服务。
          </p>

          <p>
            2.1.2 车来客服务
            <br />
            向甲方提供“车来客”软件系统，以及甲方与甲方用户间等各种形式的库存管理、客户管理、在线咨询、网上发布等服务。
            <br />
            向甲方提供车来客账户，用于甲方即时在线查询使用“车来客服务”过程中甲方的款项收付账务明细。
          </p>

          <p>
            2.2 乙方向甲方提供的具体产品详见附件---产品清单。
          </p>

          <h3 className="ui header">
            第三条 权利义务
          </h3>

          <p>
            3.1 甲方的权利与义务
          </p>

          <p>
            3.1.1 甲方需向乙方提供乙方公司营业执照副本或组织结构代码证复印件，并在该等资料发生变更后三个工作日内书面通知乙方。甲方应承担因上述资料不准确、不真实、不及时和不完整而产生的一切后果（包括但不限于发票误寄、不能联系导致的业务不能开展、乙方不能识别甲方新的身份发送的指令从而不执行甲方指令）。
          </p>

          <p>
            3.1.2 甲方独立承担因其网站的交易信息违法、虚假、陈旧或不详实造成的投诉、退货、纠纷、处罚等责任。
          </p>

          <p>
            3.1.3 甲方承诺，不在未经乙方确认的甲方指定网站以外的其他网站上使用乙方的数据接口（包括：库存车辆数据同步接口、客户资料同步接口），不将乙方提供的接口技术、安全协议及证书等以任何方式提供给第三方使用，不使用乙方提供的接口为第三方提供商业服务，但甲方或甲方母公司控股的机构除外。
          </p>

          <p>
            3.1.4 甲方应妥善保管乙方提供的车来客账户、密码和（或）数字证书。甲方的车来客账户、密码和（或）数字证书是乙方识别甲方身份及指令的唯一标志，所有使用甲方车来客账户、密码和（或）数字证书的操作即为甲方的（授权）操作行为，因甲方车来客账户、密码和（或）数字证书遗失、泄露、被窃所导致的损失由甲方独自承担。任何使用甲方的车来客账户、密码和（或）数字证书发送至“车来客”软件系统的支付指令构成甲方不可撤销的授权操作指示，乙方对于依照该指示进行操作的行为及其结果不承担任何责任。
          </p>

          <p>
            3.1.5 甲方承诺，在使用“车来客服务”时遵守各项法律法规及规范性文件。甲方承诺，其使用“车来客服务”时与甲方用户之间的交易行为不违反相关法律法规规定。
          </p>

          <p>
            3.1.6 甲方理解并同意在其网站（含网站系统）存在不安全因素可能影响到乙方或乙方会员利益的情况下，或甲方在使用车来客服务协议过程中侵犯了乙方关联公司合法权益（包括但不限于商誉、知识产权等）的，乙方有权要求甲方立即消除不安全因素。若在得到乙方通知后甲方仍不消除该不安全因素，则乙方有权单方面解除本合同且不承担任何法律责任。
          </p>

          <p>
            3.1.7 在甲方接收到乙方软件系统反馈的指令处理状态时，除非乙方网站或软件系统明确反馈该指令处理成功或失败，否则甲方均应通过乙方提供的查询系统对该批次指令处理状态进行再确认，以便决定是否重新发送相关指令。若甲方未依照本款约定操作，直接选择重新发送指令导致多付或重复扣取款项的，因此导致的所有损失、索赔及投诉均由甲方自行承担或解决，乙方对此不承担任何责任（如乙方软件系统在收到甲方指令后，反馈“系统异常”或“处理异常”的，甲方应通过查询接口确认该批指令目前实时的处理状态，以决定是否需要重新发送指令）。
          </p>

          <p>
            3.2 乙方的权利与义务
          </p>

          <p>
            3.2.1 乙方负责车来客软件系统的建设、运行和管理，保证按照本协议向甲方提供第二条所述的各项服务。
          </p>

          <p>
            3.2.2 乙方负责受理涉及“车来客”软件系统本身问题的投诉并处理因此产生的纠纷。
          </p>

          <p>
            3.2.3 甲方告知乙方其甲方车来客账户、密码和（或）数字证书被泄漏或被未经授权的人使用后，乙方应立即采取合理的措施（包括但不限于临时冻结甲方车来客账户及账户内资金、交易），避免损失的扩大，因乙方提供保护措施不及时、不到位导致甲方损失扩大的，应就该扩大部分向甲方承担赔偿责任。
          </p>

          <p>
            3.2.4 乙方设立业务咨询和联系电话，负责解答甲方在使用“车来客服务”过程中遇到的各种疑问，并及时解决双方在可能发生的数据核对、财务来往过程中的有关问题。
          </p>

          <p>
            3.2.5 因任何原因导致乙方停止为甲方服务的（包括但不限于：甲方主动停用乙方服务、乙方自身停止提供服务），乙方有义务在不超过一个月内配合甲方将所有使用服务过程中产生的所有数据内容（包括但不限于员工资料与权限、库存车辆信息、交易信息、客户资料信息等）导出给甲方以备使用。
          </p>

          <p>
            3.2.6 乙方应确保“车来客服务”不违反现行法律、法规和规章的规定。
          </p>

          <h3 className="ui header">
            第四条 保密条款
          </h3>

          <p>
            5.1 乙方对甲方使用“车来客”软件中所保存的二手车库存信息、客户资料信息负有保密义务，未经甲方书面同意，乙方不得向任何第三方透露甲方库存车辆的收购或销售成交价格、库存周期、客户姓名、客户电话、客户地址等敏感资料。
          </p>

          <p>
            5.2 因乙方（及其雇员）人为原因或黑客攻击等技术手段泄漏甲方的二手车库存信息、客户资料信息而导致的甲方损失的，甲方有权要求乙方赔偿所造成的经济损失。
          </p>

          <p>
            5.3 为了向更多车来客会员用户提供优质的大数据服务，甲方同意乙方可将如下信息开放给全行业使用：

          </p>
          <div>
            1）二手车库存信息按地区、按品类进行统计汇总并去除具体车商标识后，供全行业进行市场行情分析参考。具体开放的内容，仅限如下表所示的方式（具体车型、地区、时间段为示例）：
            <table className="ui basic table">
              <thead>
                <tr>
                  <th>地区</th>
                  <th>品牌</th>
                  <th>车系</th>
                  <th>车型</th>
                  <th>车龄</th>
                  <th>2015年1月</th>
                  <th>2015年2月</th>
                  <th>2015年3月</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>南京</td>
                  <td>奥迪</td>
                  <td>Q5</td>
                  <td>2011技术版</td>
                  <td>1~2年</td>
                  <td>最低价34.5万，最高35.6万，平均34.8万</td>
                  <td>...</td>
                  <td>...</td>
                </tr>
                <tr>
                  <td>上海</td>
                  <td>宝马</td>
                  <td>5系</td>
                  <td>525Li</td>
                  <td>1~2年</td>
                  <td>...</td>
                  <td>...</td>
                  <td>...</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            2）客户需求信息在去除具体客户姓名、电话、地址、性别等隐私信息，并替换为甲方自身企业或雇员名称、企业或雇员电话、企业或雇员地址后，供全行业互相促成交易而进行需求匹配、或进行全行业客户需求趋势分析。具体开放的内容，仅限如下两种方式：
          </p>

          <div>
            a. 为互相促成交易而进行客户买车需求和其它同行合作车辆。如下表所示例：
            <br />
            <b>客户需求：</b> 购买3年内奥迪A4，黑色，25万之内
            <br />
            <b>匹配车辆</b>
            <table className="ui basic table">
              <thead>
                <tr>
                  <th>车型</th>
                  <th>年份</th>
                  <th>里程</th>
                  <th>报价</th>
                  <th>归属公司</th>
                  <th>联系人</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>奥迪A4</td>
                  <td>2011年10月</td>
                  <td>3.5万公里</td>
                  <td>23.4万</td>
                  <td>XXX二手车行</td>
                  <td>张三丰（13800012234）</td>
                </tr>
                <tr>
                  <td>奥迪A4</td>
                  <td>2012年5月</td>
                  <td>3.5万公里</td>
                  <td>24.5万</td>
                  <td>YYY二手车行</td>
                  <td>李世民（15800012234）</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            b. 为帮助二手车行业内判断销售趋势而进行客户需求趋势分析。如下表所示例：
            <br />
            <table className="ui basic table">
              <thead>
                <tr>
                  <th>地区</th>
                  <th>需求类型</th>
                  <th>需求品牌</th>
                  <th>需求车系</th>
                  <th>2015年1月</th>
                  <th>2015年2月</th>
                  <th>2015年3月</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>南京</td>
                  <td>小轿车</td>
                  <td>奥迪</td>
                  <td>A4/A6L</td>
                  <td>2500条</td>
                  <td>2325条</td>
                  <td>1897条</td>
                </tr>
                <tr>
                  <td>上海</td>
                  <td>SUV</td>
                  <td>奥迪</td>
                  <td>Q5</td>
                  <td>1235条</td>
                  <td>1128条</td>
                  <td>1032条</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            5.4 除如上所规定明确责任外，除非法律法规另有规定，甲乙双方对于本合同内容及因履行本合同而获知的另一方的商业和技术秘密负有保密义务，任何一方不得将本合同内容及已获知的另一方的商业和技术秘密泄露或以其他任何变相形式告知任何非本合同当事人（包括双方没有必要授权的任何雇员），或用于除履行本合同之外的其他目的。
          </p>

          <p>
            5.5 双方均应采取一切合理、必要的步骤，保证各自（及其雇员）遵守上述约定。双方应采取合理的预防措施以保护保密信息，此种预防措施应至少与甲方对自己的保密信息所采取的措施一样重大，但不应少于合理的关注。
          </p>

          <p>
            5.6 未经对方书面同意，任何一方不得以任何方式披露关于双方正在合作及洽谈的内容。
          </p>

          <h3 className="ui header">
            第五条知识产权
          </h3>

          <p>
            乙方及其关联公司拥有本协议中自有服务内容的一切权利。甲方可在乙方授权前提下，在实现本协议目的的范围内合理使用乙方的相应知识产品，包括但不限于商标、LOGO等；若甲方未经乙方授权将乙方的知识产权用于本协议目的之外，或在使用中给乙方造成不良影响的，乙方有权要求甲方在指定的时间内进行整改，若甲方逾期未整改的，乙方有权终止本协议并要求甲方承担因此给乙方造成的损失。
          </p>

          <h3 className="ui header">
            第六条合同终止
          </h3>

          <p>
            7.1 发生下列情形的，守约方有权立即终止本合同。
          </p>

          <p>
            7.1.1 一方违反本合同约定，未履行相关义务，经另一方书面通知后30天内仍未改正的。
          </p>

          <p>
            7.1.2 一方严重违反本合同约定导致本合同目的不能实现的；
          </p>

          <p>
            7.2 本合同期限届满。
          </p>

          <h3 className="ui header">
            第七条除外责任
          </h3>

          <p>
            8.1 为有效提供服务，乙方网站、“车来客”软件系统将不时进行维护和检测，对此乙方将提前二十四小时在乙方网站公告，因此产生的服务中断或不稳定状态，不视为乙方违约。
          </p>

          <p>
            8.2 本合同有效期内，因国家相关主管部门颁布、变更的法令、政策导致乙方不能提供约定服务的，不视为乙方违约，双方应根据相关的法令、政策变更合同内容。
          </p>

          <h3 className="ui header">
            第八条适用法律及争议解决
          </h3>

          <p>
            9.1 本合同的效力、解释、变更、执行及争议的解决等均适用中华人民共和国法律，没有相关法律规定的，参照通用的国际商业惯例和（或）行业惯例。
          </p>

          <p>
            9.2 因本合同产生的任何争议，双方应协商解决，协商不成的，应提交被告所在地有管辖权的人民法院裁决。
          </p>

          <h3 className="ui header">
            第九条违约责任
          </h3>

          <p>
            10.1 除本合同另有约定外，任何一方违反本合同约定的，应赔偿因此给另一方造成的直接损失。
          </p>

          <p>
            10.2 除前款约定外，任何一方均不应对对方因财产损失、人身伤害、利润损失、收入损失、营业中断等直接的、间接的、特殊的或偶然性损失负责。
          </p>

          <h3 className="ui header">
            第十条 通知与送达
          </h3>

          <p>
            双方明确，本协议约定的地址是双方在本协议履行过程中进行联系的有效地址，该地址发生变更的，应及时以书面或口头形式通知另一方。
          </p>

          <p>
            本协议履行过程中的任何变更、终止、通知等都应以书面的方式进行，且应在书面文件中加盖公司公章，以任何其他方式提供的上述要求都不能对另一方构成有效约束。
          </p>

          <h3 className="ui header">
            第十一条 可转让性
          </h3>

          <p>
            未经另一方书面同意，本协议任何一方均不得转让或者让与本协议项下的任何权利和义务，但为履行本协议需要，乙方有权不经甲方同意在公司收购、合并或业务转型时，将本协议项下的权利和义务一并转让具备合法履约能力（包括但不限于经营“车来客”业务）的第三方，第三方必须完全接受本协议的全部相关合作和保密条款。同时，乙方对受让人的履约行为承担连带责任。
          </p>

          <h3 className="ui header">
            第十二条 其他
          </h3>

          <p>
            13.2 本协议附件及备注与本协议具有同等法律效力。
          </p>

          <p>
            13.3 本协议构成甲乙双方之间完整的合同，取代双方之前达成的所有口头、书面约定。
          </p>
        </div>
      </Modal>
    )
  }
}
/*eslint-enable */
