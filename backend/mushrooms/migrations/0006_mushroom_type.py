# Generated by Django 3.1.1 on 2020-09-06 09:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mushrooms', '0005_remove_mushroom_type'),
    ]

    operations = [
        migrations.AddField(
            model_name='mushroom',
            name='type',
            field=models.CharField(blank=True, max_length=128),
        ),
    ]
