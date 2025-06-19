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

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def profile_view(request):
    user = request.user
    return Response({
        "username" : user.username,
        "email" : user.email,
    })
    
# from rest_framework.decorators import api_view
# from rest_framework.response import Response
# from rest_framework import status
# from .serializers import RegisterSerializer
# from django.contrib.auth.models import User

# @api_view(['POST'])
# def register(request):
#     serializer = RegisterSerializer(data=request.data)
#     if serializer.is_valid(raise_exception=True):
#         serializer.save()
#         return Response({"status": "success", "message": "Account created successfully!"}, status=status.HTTP_201_CREATED)
    

logger = logging.getLogger(__name__)

@api_view(['POST'])
def register(request):
    try:
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response({"status": "success", "message": "Account created successfully!"}, status=status.HTTP_201_CREATED)
    except Exception as e:
        logger.error(f"Registration Error: {str(e)}")
        return Response({"status": "error", "message": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

# @api_view(['POST'])
# def register(request):
#     serializer = RegisterSerializer(data=request.data)
#     if serializer.is_valid(raise_exception=True):
#         # If the serializer is valid, it will raise an exception if not
#         email = serializer.validated_data.get('email')
#         if User.objects.filter(email=email).exists():
#             return Response({"status": "error", "message": "Email already exists"}, status=status.HTTP_400_BAD_REQUEST)
#     if serializer.is_valid():
#         serializer.save()
#         return Response({"status": "success", "message": "Account created successfully!"}, status=status.HTTP_201_CREATED)
#     return Response({"status": "error", "message": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

# @api_view(['POST'])
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer






@api_view(['GET'])
def index(request):
    return HttpResponse("Welcome to the backend API. Use /api/token/ to obtain JWT tokens.")