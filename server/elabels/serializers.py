from rest_framework import serializers
from .models import ELabel
from utils.supabase import upload_file_to_supabase
import qrcode
import io
import json

class ELabelSerializer(serializers.ModelSerializer):
    image_file = serializers.ImageField(write_only=True, required=False)

    class Meta:
        model = ELabel
        fields = '__all__'
        extra_fields = ['image_file']

    def _get_qr_data(self, instance):
        # Exclude user and company user id
        data = {
            field.name: getattr(instance, field.name)
            for field in instance._meta.fields
            if field.name not in ['user', 'company_profile', 'qr_code']
        }
        return data

    def _generate_and_upload_qr(self, instance):
        qr_data = self._get_qr_data(instance)
        qr_json = json.dumps(qr_data, default=str)
        qr_img = qrcode.make(qr_json)
        buffer = io.BytesIO()
        qr_img.save(buffer, format='PNG')
        buffer.seek(0)
        file_name = f"elabels/QR-codes/elabel_{instance.id}.png"
        url = upload_file_to_supabase(buffer, file_name)
        instance.qr_code = url
        instance.save()

    def create(self, validated_data):
        image_file = validated_data.pop('image_file', None)
        instance = super().create(validated_data)
        if image_file:
            url = upload_file_to_supabase(image_file, f"elabel_images/{instance.id}_{image_file.name}")
            instance.image = url
            instance.save()
        self._generate_and_upload_qr(instance)
        return instance

    def update(self, instance, validated_data):
        image_file = validated_data.pop('image_file', None)
        instance = super().update(instance, validated_data)
        if image_file:
            url = upload_file_to_supabase(image_file, f"elabel_images/{instance.id}_{image_file.name}")
            instance.image = url
            instance.save()
        self._generate_and_upload_qr(instance)
        return instance 