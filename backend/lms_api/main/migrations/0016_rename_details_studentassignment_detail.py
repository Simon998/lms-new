# Generated by Django 5.0.2 on 2024-03-20 14:44

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0015_studentassignment'),
    ]

    operations = [
        migrations.RenameField(
            model_name='studentassignment',
            old_name='details',
            new_name='detail',
        ),
    ]
