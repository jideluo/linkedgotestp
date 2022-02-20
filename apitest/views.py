from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework import exceptions
# from rest_framework.request import Request
from django.http import  HttpResponse
import  json

from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from apitest.views import UserSerializer, GroupSerializer



class MyAuthentication(object):
    def authenticate(self,request):
        token = request._request.GET.get('token')
        # 获取用户名和密码，去数据校验
        if not token:
            raise exceptions.AuthenticationFailed('用户认证失败')
        return ("dog",None)

    def authenticate_header(self,val):
        pass

class DogView(APIView):
    authentication_classes = [MyAuthentication,]

    def get(self,request,*args,**kwargs):
        print(request)
        print(request.user)
        self.dispatch
        ret  = {
            'code':1000,
            'msg':'xxx'
        }
        return HttpResponse(json.dumps(ret),status=201)


class UserViewSet(viewsets.ModelViewSet):
    """
    允许用户查看或编辑的API路径。
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
class GroupViewSet(viewsets.ModelViewSet):
    """
    允许组查看或编辑的API路径。
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
