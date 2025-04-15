import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-builder',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss'],
})
export class BuilderComponent {
  builderForm: FormGroup;
  generatedPrompt: string = '';

  constructor(private fb: FormBuilder) {
    this.builderForm = this.fb.group({
      websiteName: ['', Validators.required],
      websitePurpose: ['', Validators.required],
      colorScheme: ['', Validators.required],
      layoutStyle: ['', Validators.required],
      hasContactForm: [false],
      hasGallery: [false],
      hasBlog: [false],
      hasNewsletter: [false],
      hasSocialMedia: [false],
      customFeatures: [''],
      targetAudience: [''],
    });
  }

  generatePrompt(): void {
    if (this.builderForm.valid) {
      const formData = this.builderForm.value;

      // Build the prompt based on form data
      let prompt = `Create a ${formData.websitePurpose} website with the following specifications:\n\n`;
      prompt += `Website Name: ${formData.websiteName}\n`;
      prompt += `Design Style: ${formData.colorScheme} with ${formData.layoutStyle} layout\n\n`;

      prompt += 'Required Features:\n';
      if (formData.hasContactForm) prompt += '- Contact form\n';
      if (formData.hasGallery) prompt += '- Image gallery\n';
      if (formData.hasBlog) prompt += '- Blog section\n';
      if (formData.hasNewsletter) prompt += '- Newsletter signup\n';
      if (formData.hasSocialMedia) prompt += '- Social media integration\n';

      if (formData.customFeatures) {
        prompt += `\nAdditional Features:\n${formData.customFeatures}\n`;
      }

      if (formData.targetAudience) {
        prompt += `\nTarget Audience:\n${formData.targetAudience}\n`;
      }

      prompt +=
        '\nPlease create a modern, responsive website that follows best practices for web development.';

      this.generatedPrompt = prompt;
    }
  }

  copyPrompt(): void {
    if (this.generatedPrompt) {
      navigator.clipboard
        .writeText(this.generatedPrompt)
        .then(() => {
          // You could add a toast notification here
          console.log('Prompt copied to clipboard');
        })
        .catch((err) => {
          console.error('Failed to copy prompt:', err);
        });
    }
  }
}
