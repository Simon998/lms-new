# Generated by Django 5.0.2 on 2024-03-29 08:25

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0034_course_course_views'),
    ]

    operations = [
        migrations.CreateModel(
            name='FAQS',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('question', models.CharField(max_length=250)),
                ('answer', models.TextField()),
            ],
            options={
                'verbose_name_plural': '97.  FAQs',
            },
        ),
        migrations.AlterField(
            model_name='course',
            name='category',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='category_courses', to='main.coursecategory'),
        ),
    ]
