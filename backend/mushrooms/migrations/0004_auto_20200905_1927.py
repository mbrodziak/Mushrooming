# Generated by Django 3.1.1 on 2020-09-05 19:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mushrooms', '0003_auto_20200905_1925'),
    ]

    operations = [
        migrations.AlterField(
            model_name='mushroom',
            name='application',
            field=models.CharField(max_length=128),
        ),
        migrations.AlterField(
            model_name='mushroom',
            name='latin_name',
            field=models.CharField(blank=True, max_length=256),
        ),
    ]
