# Generated by Django 3.1.1 on 2020-10-29 20:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mushrooms', '0017_auto_20201029_2004'),
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category', models.CharField(blank=True, max_length=128)),
            ],
        ),
        migrations.RemoveField(
            model_name='mushroomtest',
            name='category',
        ),
    ]