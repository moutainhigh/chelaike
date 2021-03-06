<%@ page language="java" pageEncoding="UTF-8"
  contentType="text/html; charset=UTF-8"%>
<%@ include file="/common/taglibs.jsp"%>
<%@ include file="/common/meta.jsp"%>
<!DOCTYPE html>
<html>
	<head>
		<title>质保等级设置</title>		
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script type="text/javascript" src="${ctx}/js/common/syUtil.js"></script>
    <script type="text/javascript" src="${ctx}/js/common/ctutil.js"></script>
    <script type="text/javascript" src="${ctx}/js/common/menu.js"></script>
    <script type="text/javascript" src="${ctx}/js/common/select.js"></script>
    <script type="text/javascript" src="${ctx}/js/common/jquery.json-2.4.js"></script>
    <script type="text/javascript" src="${ctx}/js/business/vehicle/vehicle_vin.js"></script>
    <script type="text/javascript" src="${ctx}/js/pages/catalogue/catalogue.js"></script>
    <script type="text/javascript" src="${ctx}/js/pages/region/region.js"></script>
    <script type="text/javascript" src="${ctx}/js/common/validator/validator.js"></script>
    <link rel="stylesheet" type="text/css" href="${ctx}/css/style.css" />
    <script type="text/javascript">
    var api = frameElement.api, W = api.opener;
      function do_submit() { 
        
          var name=$('#name').val();
          var fee=$('#fee').val();
          if(name==""){
            alert("请填写等级名称!");
            $('#name').focus();
            return;
          }
          
          if(fee == ''){
           alert("请填写质保费用!");
			     $("#fee").focus();
            return ;
		} else {
			if(!validator.validateNum(fee)) {
        alert("质保费用请输入数字!");
				$("#fee").focus();
				return;
			}
		}
                
          var formData=$('#form').serialize();
          var dialog_object=W.get_dialog_instance();
dialog_object.button({id:'ok',disabled: true});
          $.post('${ctx}/core/warranty_level_edit.action',formData,function(data){
            if(data=='0000'){       
            alert("编辑信息成功");      
             api.get("infosource_dialog",1).close();       
              W.query1();
            }else{
              alert("编辑信息失败");   
              dialog_object.button({id:'ok',disabled:false});
              return;
            }
          });    
      }

      function close_win(){
        api.get("infosource_dialog",1).close();
        W.query1();
      }
    </script>
	</head>
	<body>
	<form class="form-horizontal" role="form" id="form" name="form">
    <input type="hidden" name="sysParamBean.id" value="${sysParamBean.id}" />
    <div class="box">
			<table>
				<tr>
					<td class="text-r" width="158"><font color="red">*</font>&nbsp;&nbsp;等级名称：</td>
					<td width="430">
						<input type="email" class="input w200" name="sysParamBean.name" 
      						id="name" placeholder="等级名称" value="${sysParamBean.name}">
					</td>
				</tr>
				<tr>
					<td class="text-r" width="158"><font color="red">*</font>&nbsp;&nbsp;质保金额：</td>
					<td width="430">
						<input type="email" class="input w200" name="sysParamBean.fee" 
      						id="fee" placeholder="质保金额(元)" value="${sysParamBean.fee}">
					</td>
				</tr>
				<tr>
					<td class="text-r" width="158">备注：</td>
					<td>
						<textarea class="area" rows="3" id="remark" name="sysParamBean.remark" placeholder="备注">${sysParamBean.remark}</textarea>
					</td>
				</tr>
			</table>		
		</div>
</form>
</body>
</html>