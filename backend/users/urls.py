from django.urls import path
from .views import register, MyTokenObtainPairView , profile_view

urlpatterns = [
    path('register/', register, name='register'),
    path('login/', MyTokenObtainPairView.as_view(), name='login'),  # This should work now
    path('profile/', profile_view , name='profile_view')
]
