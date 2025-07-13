from rest_framework import serializers
from .models import ELabel
from utils.supabase import upload_file_to_supabase

class ELabelSerializer(serializers.ModelSerializer):
    image_file = serializers.ImageField(write_only=True, required=False)

    class Meta:
        model = ELabel
        fields = '__all__'
        extra_fields = ['image_file']

    def create(self, validated_data):
        image_file = validated_data.pop('image_file', None)
        instance = super().create(validated_data)
        if image_file:
            url = upload_file_to_supabase(image_file, f"elabel_images/{instance.id}_{image_file.name}")
            instance.image = url
            instance.save()
        return instance

    def update(self, instance, validated_data):
        image_file = validated_data.pop('image_file', None)
        instance = super().update(instance, validated_data)
        if image_file:
            url = upload_file_to_supabase(image_file, f"elabel_images/{instance.id}_{image_file.name}")
            instance.image = url
            instance.save()
        return instance 