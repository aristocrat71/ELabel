from rest_framework.routers import DefaultRouter
from .views import ELabelViewSet

router = DefaultRouter()
router.register(r'elabels', ELabelViewSet, basename='elabel')

urlpatterns = router.urls 