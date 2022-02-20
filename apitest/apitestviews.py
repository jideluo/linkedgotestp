from django.shortcuts import render

# Create your views here.
# from rest_framework.views import APIView
from rest_framework import exceptions
# from rest_framework.request import Request
from django.http import HttpResponse,JsonResponse
import json

# class MyAuthentication(object):
#     def authenticate(self,request):
#         token = request._request.GET.get('token')
#         # 获取用户名和密码，去数据校验
#         if not token:
#             raise exceptions.AuthenticationFailed('用户认证失败')
#         return ("dog",None)

#     def authenticate_header(self,val):
#         pass

# class DogView(APIView):
#     authentication_classes = [MyAuthentication,]

#     def get(self,request,*args,**kwargs):
#         print(request)
#         print(request.user)
#         self.dispatch
#         ret  = {
#             'code':1000,
#             'msg':'xxx'
#         }
#         return HttpResponse(json.dumps(ret),status=201)


# class LoginView(APIView):

#     def get(self,request,*args,**kwargs):
#         ret = {
#             'code':111,
#             'data':'在知识的海洋里一路向前'
#         }
#         response =  JsonResponse(ret)
#         response['Access-Control-Allow-Origin']='*'
#         return response

    # def post(self,request,*args,**kwargs):
    #     print(request.body)  #在body里面有值
    #     print(request.POST)   #在post里面是没有值的
    #     ret = {
    #         'code':1000,
    #         'username':'haiyn',
    #         'token':'sdswr3fdfsdfdxqw2fgh',
    #     }
    #     response = JsonResponse(ret)
    #     response['Access-Control-Allow-Origin'] = "*"
    #     return response

    # def options(self, request, *args, **kwargs):
    #     response = HttpResponse()
    #     response['Access-Control-Allow-Origin'] = '*'
    #     response['Access-Control-Allow-Headers'] = '*'
    #     return response