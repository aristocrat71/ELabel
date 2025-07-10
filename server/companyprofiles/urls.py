from rest_framework.routers import DefaultRouter
from .views import CompanyProfileViewSet

router = DefaultRouter()
router.register(r'companyprofiles', CompanyProfileViewSet, basename='companyprofile')

urlpatterns = router.urls 