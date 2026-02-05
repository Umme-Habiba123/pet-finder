'use client';

import { useState } from 'react';

export default function AddPetForm() {
  const [formData, setFormData] = useState({
    petName: '',
    petType: '',
    breed: '',
    age: '',
    gender: '',
    size: '',
    color: '',
    vaccinated: '',
    neutered: '',
    healthCondition: '',
    temperament: [],
    ownerName: '',
    ownerEmail: '',
    ownerPhone: '',
    location: '',
    reason: '',
    additionalInfo: '',
    petImage: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      temperament: checked 
        ? [...prev.temperament, value]
        : prev.temperament.filter(item => item !== value)
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData(prev => ({
      ...prev,
      petImage: file
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Thank you for submitting! We will review your pet for adoption.');
  };

  return (
    <>
      <style jsx>{`
        .text-accent-yellow {
          color: #D4A017;
        }
        
        .border-accent-yellow {
          border-color: #D4A017;
        }
        
        .bg-accent-yellow {
          background-color: #D4A017;
        }
        
        .bg-accent-yellow-hover:hover {
          background-color: #B8860B;
        }
        
        /* Custom file upload styling */
        .file-upload-wrapper {
          position: relative;
          overflow: hidden;
          display: inline-block;
          width: 100%;
        }
        
        .file-upload-wrapper input[type=file] {
          position: absolute;
          left: -9999px;
        }
        
        .file-upload-label {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 3rem 1rem;
          border: 2px dashed #D4A017;
          border-radius: 0.75rem;
          cursor: pointer;
          transition: all 0.3s ease;
          background: transparent;
        }
        
        .file-upload-label:hover {
          background: rgba(212, 160, 23, 0.05);
          border-color: #B8860B;
        }
        
        /* Form animations */
        .form-section {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <section className="py-16 lg:py-24 bg-base-100 min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          
          {/* Header */}
          <div className="text-center mb-12 form-section">
            <div className="inline-flex items-center justify-center gap-2 mb-4">
              <svg className="w-10 h-10 fill-current text-accent-yellow" viewBox="0 0 24 24">
                <path d="M8.5 3C7.119 3 6 4.119 6 5.5S7.119 8 8.5 8 11 6.881 11 5.5 9.881 3 8.5 3zm7 0C14.119 3 13 4.119 13 5.5S14.119 8 15.5 8 18 6.881 18 5.5 16.881 3 15.5 3zM5 9c-1.381 0-2.5 1.119-2.5 2.5S3.619 14 5 14s2.5-1.119 2.5-2.5S6.381 9 5 9zm14 0c-1.381 0-2.5 1.119-2.5 2.5S17.619 14 19 14s2.5-1.119 2.5-2.5S20.381 9 19 9zm-7 2c-2.761 0-5 2.239-5 5 0 2.762 2.239 5 5 5s5-2.238 5-5c0-2.761-2.239-5-5-5z"/>
              </svg>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-base-content mb-4">
              Add Pet for Adoption
            </h1>
            <p className="text-base lg:text-lg text-base-content/60 max-w-2xl mx-auto">
              Help us find a loving home for your pet. Fill out the form below with accurate information to ensure the best match.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-base-200 rounded-2xl p-6 lg:p-10 shadow-xl form-section">
            
            {/* Pet Information */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-accent-yellow mb-6 flex items-center gap-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                </svg>
                Pet Information
              </h2>
              
              <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
                {/* Pet Name */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-base-content font-semibold">Pet Name *</span>
                  </label>
                  <input 
                    type="text" 
                    name="petName"
                    value={formData.petName}
                    onChange={handleInputChange}
                    placeholder="Enter pet's name" 
                    className="input input-bordered bg-base-100 border-base-300 focus:border-accent-yellow focus:outline-none w-full"
                    required
                  />
                </div>

                {/* Pet Type */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-base-content font-semibold">Pet Type *</span>
                  </label>
                  <select 
                    name="petType"
                    value={formData.petType}
                    onChange={handleInputChange}
                    className="select select-bordered bg-base-100 border-base-300 focus:border-accent-yellow focus:outline-none w-full"
                    required
                  >
                    <option value="">Select type</option>
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                    <option value="bird">Bird</option>
                    <option value="rabbit">Rabbit</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Breed */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-base-content font-semibold">Breed</span>
                  </label>
                  <input 
                    type="text" 
                    name="breed"
                    value={formData.breed}
                    onChange={handleInputChange}
                    placeholder="e.g., Golden Retriever" 
                    className="input input-bordered bg-base-100 border-base-300 focus:border-accent-yellow focus:outline-none w-full"
                  />
                </div>

                {/* Age */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-base-content font-semibold">Age *</span>
                  </label>
                  <input 
                    type="text" 
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    placeholder="e.g., 2 years" 
                    className="input input-bordered bg-base-100 border-base-300 focus:border-accent-yellow focus:outline-none w-full"
                    required
                  />
                </div>

                {/* Gender */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-base-content font-semibold">Gender *</span>
                  </label>
                  <select 
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="select select-bordered bg-base-100 border-base-300 focus:border-accent-yellow focus:outline-none w-full"
                    required
                  >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>

                {/* Size */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-base-content font-semibold">Size</span>
                  </label>
                  <select 
                    name="size"
                    value={formData.size}
                    onChange={handleInputChange}
                    className="select select-bordered bg-base-100 border-base-300 focus:border-accent-yellow focus:outline-none w-full"
                  >
                    <option value="">Select size</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                  </select>
                </div>

                {/* Color */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-base-content font-semibold">Color/Markings</span>
                  </label>
                  <input 
                    type="text" 
                    name="color"
                    value={formData.color}
                    onChange={handleInputChange}
                    placeholder="e.g., Brown & White" 
                    className="input input-bordered bg-base-100 border-base-300 focus:border-accent-yellow focus:outline-none w-full"
                  />
                </div>

                {/* Vaccinated */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-base-content font-semibold">Vaccinated? *</span>
                  </label>
                  <select 
                    name="vaccinated"
                    value={formData.vaccinated}
                    onChange={handleInputChange}
                    className="select select-bordered bg-base-100 border-base-300 focus:border-accent-yellow focus:outline-none w-full"
                    required
                  >
                    <option value="">Select option</option>
                    <option value="yes">Yes - Fully Vaccinated</option>
                    <option value="partial">Partially Vaccinated</option>
                    <option value="no">Not Vaccinated</option>
                  </select>
                </div>

                {/* Neutered/Spayed */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-base-content font-semibold">Neutered/Spayed? *</span>
                  </label>
                  <select 
                    name="neutered"
                    value={formData.neutered}
                    onChange={handleInputChange}
                    className="select select-bordered bg-base-100 border-base-300 focus:border-accent-yellow focus:outline-none w-full"
                    required
                  >
                    <option value="">Select option</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>

                {/* Health Condition */}
                <div className="form-control sm:col-span-2">
                  <label className="label">
                    <span className="label-text text-base-content font-semibold">Health Condition</span>
                  </label>
                  <textarea 
                    name="healthCondition"
                    value={formData.healthCondition}
                    onChange={handleInputChange}
                    placeholder="Describe any health issues or special needs..." 
                    className="textarea textarea-bordered bg-base-100 border-base-300 focus:border-accent-yellow focus:outline-none w-full h-24"
                  ></textarea>
                </div>
              </div>

              {/* Temperament */}
              <div className="form-control mt-6">
                <label className="label">
                  <span className="label-text text-base-content font-semibold">Temperament (Select all that apply)</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {['Friendly', 'Playful', 'Calm', 'Energetic', 'Good with kids', 'Good with pets'].map((trait) => (
                    <label key={trait} className="cursor-pointer flex items-center gap-2">
                      <input 
                        type="checkbox" 
                        value={trait}
                        checked={formData.temperament.includes(trait)}
                        onChange={handleCheckboxChange}
                        className="checkbox checkbox-sm border-base-300 [--chkbg:#D4A017] [--chkfg:white]" 
                      />
                      <span className="label-text text-base-content">{trait}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Owner Information */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-accent-yellow mb-6 flex items-center gap-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
                Your Information
              </h2>
              
              <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
                {/* Owner Name */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-base-content font-semibold">Full Name *</span>
                  </label>
                  <input 
                    type="text" 
                    name="ownerName"
                    value={formData.ownerName}
                    onChange={handleInputChange}
                    placeholder="Your name" 
                    className="input input-bordered bg-base-100 border-base-300 focus:border-accent-yellow focus:outline-none w-full"
                    required
                  />
                </div>

                {/* Email */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-base-content font-semibold">Email Address *</span>
                  </label>
                  <input 
                    type="email" 
                    name="ownerEmail"
                    value={formData.ownerEmail}
                    onChange={handleInputChange}
                    placeholder="your@email.com" 
                    className="input input-bordered bg-base-100 border-base-300 focus:border-accent-yellow focus:outline-none w-full"
                    required
                  />
                </div>

                {/* Phone */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-base-content font-semibold">Phone Number *</span>
                  </label>
                  <input 
                    type="tel" 
                    name="ownerPhone"
                    value={formData.ownerPhone}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 000-0000" 
                    className="input input-bordered bg-base-100 border-base-300 focus:border-accent-yellow focus:outline-none w-full"
                    required
                  />
                </div>

                {/* Location */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-base-content font-semibold">Location *</span>
                  </label>
                  <input 
                    type="text" 
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="City, State" 
                    className="input input-bordered bg-base-100 border-base-300 focus:border-accent-yellow focus:outline-none w-full"
                    required
                  />
                </div>

                {/* Reason for Adoption */}
                <div className="form-control sm:col-span-2">
                  <label className="label">
                    <span className="label-text text-base-content font-semibold">Reason for Giving Up Pet *</span>
                  </label>
                  <textarea 
                    name="reason"
                    value={formData.reason}
                    onChange={handleInputChange}
                    placeholder="Please explain why you need to rehome your pet..." 
                    className="textarea textarea-bordered bg-base-100 border-base-300 focus:border-accent-yellow focus:outline-none w-full h-24"
                    required
                  ></textarea>
                </div>

                {/* Additional Info */}
                <div className="form-control sm:col-span-2">
                  <label className="label">
                    <span className="label-text text-base-content font-semibold">Additional Information</span>
                  </label>
                  <textarea 
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleInputChange}
                    placeholder="Any other details we should know about your pet..." 
                    className="textarea textarea-bordered bg-base-100 border-base-300 focus:border-accent-yellow focus:outline-none w-full h-24"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Pet Photo Upload */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-accent-yellow mb-6 flex items-center gap-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                </svg>
                Pet Photos *
              </h2>
              
              <div className="file-upload-wrapper">
                <input 
                  type="file" 
                  id="petImage" 
                  accept="image/*"
                  onChange={handleFileChange}
                  required
                />
                <label htmlFor="petImage" className="file-upload-label text-base-content/60">
                  <svg className="w-12 h-12 text-accent-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <div>
                    <p className="font-semibold">
                      {formData.petImage ? formData.petImage.name : 'Click to upload pet photo'}
                    </p>
                    <p className="text-sm">PNG, JPG up to 10MB</p>
                  </div>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <button 
                type="submit"
                className="btn bg-accent-yellow hover:bg-accent-yellow-hover border-none text-white px-8 lg:px-12 text-base lg:text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Submit for Adoption
              </button>
              <button 
                type="reset"
                className="btn btn-ghost border border-base-300 hover:bg-base-300 px-8 lg:px-12 text-base lg:text-lg font-semibold rounded-full"
              >
                Reset Form
              </button>
            </div>
          </form>

          {/* Footer Note */}
          <div className="text-center mt-8 text-sm text-base-content/60">
            <p>
              By submitting this form, you agree to our{' '}
              <a href="/terms" className="text-accent-yellow hover:underline">Terms & Conditions</a>
              {' '}and{' '}
              <a href="/privacy" className="text-accent-yellow hover:underline">Privacy Policy</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}