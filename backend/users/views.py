# users/views.py

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from .serializers import RegisterSerializer

@api_view(['POST'])
def register(request):
    serializer = RegisterSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
        # If the serializer is valid, it will raise an exception if not
        email = serializer.validated_data.get('email')
        if User.objects.filter(email=email).exists():
            return Response({"status": "error", "message": "Email already exists"}, status=status.HTTP_400_BAD_REQUEST)
    if serializer.is_valid():
        serializer.save()
        return Response({"status": "success", "message": "User registered successfully!"}, status=status.HTTP_201_CREATED)
    return Response({"status": "error", "message": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)



@api_view(['GET'])
def index(request):
    return HttpResponse("Welcome to the backend API. Use /api/token/ to obtain JWT tokens.")