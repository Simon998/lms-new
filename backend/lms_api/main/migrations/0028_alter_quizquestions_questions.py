# Generated by Django 5.0.2 on 2024-03-26 14:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0027_attemptquiz'),
    ]

    operations = [
        migrations.AlterField(
            model_name='quizquestions',
            name='questions',
            field=models.CharField(max_length=10000),
        ),
    ]