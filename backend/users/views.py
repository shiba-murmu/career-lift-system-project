# users/views.py
import logging

from rest_framework.decorators import api_view , permission_classes
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from .serializers import RegisterSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from .serializers import MyTokenObtainPairSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework import serializers

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def user_data_view(request):
    user = request.user
    return Response({
        'first_name': user.first_name,
        'last_name': user.last_name,
        'email': user.email,
    })

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def profile_view(request):
    user = request.user
    return Response({
        "username" : user.username,
        "email" : user.email,
    })
    


    

@api_view(['POST'])
def register(request):
    serializer = RegisterSerializer(data=request.data)

    try:
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response({
            "status": "success",
            "message": "Account created successfully!"
        }, status=status.HTTP_201_CREATED)

    except serializers.ValidationError as e:
        # Get the nested error messages and format them
        error_dict = e.detail
        error_messages = []

        for field, messages in error_dict.items():
            if isinstance(messages, list):
                error_messages.extend(messages)
            else:
                error_messages.append(str(messages))

        return Response({
            "status": "error",
            "message": " ".join(error_messages)
        }, status=status.HTTP_400_BAD_REQUEST)

    except Exception as e:
        return Response({
            "status": "error",
            "message": "Something went wrong. Please try again."
        }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer



@api_view(['GET'])
def index(request):
    return HttpResponse("Welcome to the backend API. Use /api/token/ to obtain JWT tokens.")