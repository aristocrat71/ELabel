# Generated by Django 4.2.7 on 2025-07-10 07:25

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("companyprofiles", "0001_initial"),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ("elabels", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="elabel",
            name="company_profile",
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.CASCADE,
                related_name="elabels",
                to="companyprofiles.companyprofile",
            ),
        ),
        migrations.AddField(
            model_name="elabel",
            name="user",
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.CASCADE,
                related_name="elabels",
                to=settings.AUTH_USER_MODEL,
            ),
        ),
    ]
