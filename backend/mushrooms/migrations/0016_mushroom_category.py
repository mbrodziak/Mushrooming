# Generated by Django 3.1.1 on 2020-10-29 20:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mushrooms', '0015_auto_20201025_1354'),
    ]

    operations = [
        migrations.AddField(
            model_name='mushroom',
            name='category',
            field=models.CharField(blank=True, choices=[('BOROWIK', 'borowik'), ('MASLAK', 'maślak'), ('MLECZAJ', 'mleczaj'), ('MUCHOMOR', 'muchomor'), ('PODGRZYBEK', 'podgrzybek')], max_length=128),
        ),
    ]
