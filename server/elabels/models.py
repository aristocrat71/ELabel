from django.db import models
from django.db.models import JSONField
from companyprofiles.models import CompanyProfile
from accounts.models import CustomUser

class ELabel(models.Model):
    company_profile = models.ForeignKey(CompanyProfile, on_delete=models.CASCADE, related_name='elabels', null=True, blank=True)
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='elabels', null=True, blank=True)
    name = models.CharField(max_length=255)
    image = models.ImageField(upload_to='elabels/images/', blank=True, null=True)

    # Optional Additional Information
    grape_variety = models.CharField(max_length=255, blank=True, null=True)
    vintage_value = models.CharField(max_length=255, blank=True, null=True)
    quantity = models.PositiveIntegerField(blank=True, null=True)
    country = models.CharField(max_length=255, blank=True, null=True)
    region = models.CharField(max_length=255, blank=True, null=True)
    denomination = models.CharField(max_length=255, blank=True, null=True)
    classification = models.CharField(max_length=255, blank=True, null=True)

    # Nutrition Information (raw inputs)
    alcohol = models.FloatField(blank=True, null=True)
    residual_sugar = models.FloatField(blank=True, null=True)
    total_acidity = models.FloatField(blank=True, null=True)
    glycerin = models.FloatField(blank=True, null=True)
    # Calculated values (can be computed on the fly, but store checkboxes)
    display_nutrition = JSONField(default=dict)  # e.g. {"energy": true, "fat": false, ...}

    # Ingredients
    product_type = models.CharField(max_length=64, blank=True, null=True)
    ingredients = JSONField(default=list)  # List of ingredients, groups, etc.
    additional_ingredients = models.TextField(blank=True, null=True)

    # Recycling
    recycling_type = models.CharField(max_length=32, blank=True, null=True)  # manual/pdf/website
    recycling_materials = JSONField(default=list)  # List of materials
    recycling_pdf = models.FileField(upload_to='elabels/recycling/', blank=True, null=True)
    recycling_website = models.URLField(blank=True, null=True)

    # QR Code
    qr_code = models.ImageField(upload_to='elabels/qrcodes/', blank=True, null=True)

    # Timestamps
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
