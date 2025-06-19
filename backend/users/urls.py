from django.urls import path
from .views import register, MyTokenObtainPairView , profile_view , user_data_view

urlpatterns = [
    path('register/', register, name='register'),
    path('login/', MyTokenObtainPairView.as_view(), name='login'),  # This should work now
    path('profile/', profile_view , name='profile_view'),
    path('userdata/', user_data_view , name='user_data_view')
]
