from django.db import models
from accounts.models import CustomUser

class CompanyProfile(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='company_profiles')
    # General
    company_name = models.CharField(max_length=255)
    website = models.URLField(blank=True, null=True)
    legal_name = models.CharField(max_length=255, blank=True, null=True)
    street = models.CharField(max_length=255, blank=True, null=True)
    zip_code = models.CharField(max_length=20, blank=True, null=True)
    city = models.CharField(max_length=255, blank=True, null=True)
    country = models.CharField(max_length=255, blank=True, null=True)
    vat_id = models.CharField(max_length=50, blank=True, null=True)
    tax_number = models.CharField(max_length=50, blank=True, null=True)
    eori_number = models.CharField(max_length=50, blank=True, null=True)
    language = models.CharField(max_length=50, blank=True, null=True)
    currency = models.CharField(max_length=10, blank=True, null=True)
    timezone = models.CharField(max_length=50, blank=True, null=True)
    logo = models.URLField(blank=True, null=True)  # Store Supabase public URL
    # Add other fields as needed from your screenshot (appearance, categories, etc.)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.company_name
