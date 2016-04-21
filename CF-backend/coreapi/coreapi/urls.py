from django.conf.urls import include, url
from django.contrib import admin
from coreapi import views


from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'^getCombinations/$', views.StringCombinationsAPIView.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
