from django.contrib import admin
from .models import *
# Register your models here.


admin.site.register(Course)
admin.site.register(ForumPost)
admin.site.register(ForumComment)
admin.site.register(UserProfile)
# admin.site.register(Donator)