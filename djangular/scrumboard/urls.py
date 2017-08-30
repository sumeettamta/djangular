from django.conf.urls import url
from .api import ListApi, CardApi,ListViewSet,CardViewSet
from django.views.generic import TemplateView
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'list', ListViewSet)
router.register(r'cards', CardViewSet)
urlpatterns = router.urls
#
#  urlpatterns = [
#     url(r'^list/$', ListApi.as_view()),
#     url(r'^cards/$', CardApi.as_view()),
#     url(r'^home/$', TemplateView.as_view(template_name='home.html'))
#     url(r'^list/$', ListApi.as_view()),
#     url(r'^cards/$', CardApi.as_view()),
# ]
