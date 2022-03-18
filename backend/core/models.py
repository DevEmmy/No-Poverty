from django.db import models
from django.contrib.auth.models import User


# TODO: Remember to set up DJANGO ALLAUTH FOR USER AUTHENTICATION AND REGISTRATION

class Course(models.Model):
    name = models.CharField(max_length=1000)
    description = models.TextField()
    likes = models.IntegerField()
    
    '''
        and also other fields like URLField which will be used to link the videos 
    '''

    
class ForumComment(models.Model):
    content = models.TextField(max_length=400000)
    likes = models.IntegerField()
    date = models.DateTimeField(auto_now_add=True)
        
    
class ForumPost(models.Model):
    title = models.CharField(max_length=1000)
    text_content = models.TextField(null=True,max_length= 400000)
    # image = models.ImageField(null=True)
    # whether i should put an image field will be decided later
    comment_id = models.ForeignKey(ForumComment, on_delete=models.CASCADE, null=True,blank=True)
    date = models.DateTimeField(auto_now_add=True)
    last_edited = models.DateTimeField(auto_now=True)
    slug = models.SlugField(null=True)



#NOT TOO SURE IF I SHOULD ADD THIS FEATURE  
# class Donator(models.Model):
#     '''
#     model to register as a donator for the application
#     '''
#     name = models.CharField(max_length=200)
#     date_donated = models.DateTimeField(auto_now_add=True)
#     total = models.DecimalField()
    

    
class UserProfile(models.Model):
    """
        This would basically serve as a profile for people who will want to register as beneficiaries for the programme
    """
    bio = models.TextField(max_length=10000)
    email = models.EmailField()
    user_id = models.OneToOneField(User, on_delete=models.CASCADE, null=True, blank =True)
    
    
class FundRequest(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
    date = models.DateTimeField(auto_now_add=True)
    
    
    
    
    