import React, { useState } from 'react';

const SignupFlow = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    accountType: 'Student',
    fullName: '',
    email: '',
    password: '',
    agreeToTerms: false,
    verificationCode: '',
    purposes: [],
    interests: [],
    currentRole: '',
    educationLevel: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleArrayToggle = (field, value) => {
    setFormData(prev => {
      const currentArray = prev[field] || [];
      const maxSelections = field === 'purposes' ? 2 : 5;
      
      if (currentArray.includes(value)) {
        return {
          ...prev,
          [field]: currentArray.filter(item => item !== value)
        };
      } else if (currentArray.length < maxSelections) {
        return {
          ...prev,
          [field]: [...currentArray, value]
        };
      }
      return prev;
    });
  };

  const nextStep = () => setCurrentStep(prev => prev + 1);
  const prevStep = () => setCurrentStep(prev => prev - 1);

  // Step 1: Create Account
  const CreateAccount = () => {
    const handleSubmit = (e) => {
      e.preventDefault();
      nextStep();
    };

    const styles = {
      container: { padding: '24px' },
      title: { fontSize: '24px', fontWeight: 'bold', color: '#111827', marginBottom: '8px' },
      tabContainer: { display: 'flex', borderBottom: '1px solid #E5E7EB', marginBottom: '24px' },
      tab: (isActive) => ({
        flex: 1,
        padding: '12px 0',
        fontSize: '14px',
        fontWeight: '500',
        color: isActive ? '#2563EB' : '#6B7280',
        borderBottom: isActive ? '2px solid #2563EB' : 'none'
      }),
      label: { display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px' },
      input: {
        width: '100%',
        padding: '8px 12px',
        border: '1px solid #D1D5DB',
        borderRadius: '8px',
        fontSize: '14px'
      },
      checkbox: { width: '16px', height: '16px', marginRight: '8px' },
      button: {
        width: '100%',
        backgroundColor: '#2563EB',
        color: 'white',
        padding: '12px 16px',
        borderRadius: '8px',
        fontWeight: '500',
        border: 'none',
        cursor: 'pointer'
      },
      divider: {
        position: 'relative',
        margin: '24px 0',
        textAlign: 'center'
      },
      dividerLine: {
        position: 'absolute',
        top: '50%',
        left: 0,
        right: 0,
        height: '1px',
        backgroundColor: '#D1D5DB'
      },
      dividerText: {
        position: 'relative',
        backgroundColor: 'white',
        padding: '0 8px',
        color: '#6B7280',
        fontSize: '14px'
      },
      socialButton: {
        width: '100%',
        padding: '8px 16px',
        border: '1px solid #D1D5DB',
        borderRadius: '8px',
        backgroundColor: 'white',
        color: '#374151',
        fontSize: '14px',
        fontWeight: '500',
        cursor: 'pointer'
      }
    };

    return (
      <div style={styles.container}>
        <h1 style={styles.title}>Create Your Account</h1>
        
        <div style={styles.tabContainer}>
          <button 
            style={styles.tab(formData.accountType === 'Student')}
            onClick={() => handleInputChange('accountType', 'Student')}
          >
            Student
          </button>
          <button 
            style={styles.tab(formData.accountType === 'Instructor')}
            onClick={() => handleInputChange('accountType', 'Instructor')}
          >
            Instructor
          </button>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={styles.label}>Full name</label>
            <input
              type="text"
              placeholder="Enter full name"
              value={formData.fullName}
              onChange={(e) => handleInputChange('fullName', e.target.value)}
              style={styles.input}
              required
            />
          </div>

          <div>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              placeholder="Enter email address"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              style={styles.input}
              required
            />
          </div>

          <div>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              style={styles.input}
              required
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type="checkbox"
              id="terms"
              checked={formData.agreeToTerms}
              onChange={(e) => handleInputChange('agreeToTerms', e.target.checked)}
              style={styles.checkbox}
              required
            />
            <label htmlFor="terms" style={{ fontSize: '14px', color: '#374151' }}>
              I agree to the Terms of Service & Privacy Policy
            </label>
          </div>

          <button type="submit" style={styles.button}>
            Create Account
          </button>

          <div style={styles.divider}>
            <div style={styles.dividerLine}></div>
            <span style={styles.dividerText}>or continue with</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <button type="button" style={styles.socialButton}>
              Google
            </button>
            <button type="button" style={styles.socialButton}>
              GitHub
            </button>
          </div>
        </form>
      </div>
    );
  };

  // Step 2: Verify Email
  const VerifyEmail = () => {
    const handleSubmit = (e) => {
      e.preventDefault();
      nextStep();
    };

    const styles = {
      container: { padding: '24px' },
      title: { fontSize: '24px', fontWeight: 'bold', color: '#111827', marginBottom: '8px' },
      subtitle: { color: '#6B7280', marginBottom: '24px' },
      label: { display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px' },
      input: {
        width: '100%',
        padding: '8px 12px',
        border: '1px solid #D1D5DB',
        borderRadius: '8px',
        fontSize: '18px',
        textAlign: 'center',
        letterSpacing: '4px'
      },
      buttonContainer: { display: 'flex', gap: '12px' },
      button: (isPrimary = false) => ({
        flex: 1,
        padding: '12px 16px',
        borderRadius: '8px',
        fontWeight: '500',
        border: isPrimary ? 'none' : '1px solid #D1D5DB',
        backgroundColor: isPrimary ? '#2563EB' : 'white',
        color: isPrimary ? 'white' : '#374151',
        cursor: 'pointer'
      }),
      resend: {
        width: '100%',
        color: '#2563EB',
        fontWeight: '500',
        border: 'none',
        backgroundColor: 'transparent',
        cursor: 'pointer',
        padding: '8px'
      }
    };

    return (
      <div style={styles.container}>
        <h1 style={styles.title}>Check your inbox</h1>
        <p style={styles.subtitle}>
          Enter the 6-digit code we sent to email address to finish your sign up.
        </p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div>
            <label style={styles.label}>6-digit code</label>
            <input
              type="text"
              maxLength="6"
              placeholder="Enter code"
              value={formData.verificationCode}
              onChange={(e) => handleInputChange('verificationCode', e.target.value)}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.buttonContainer}>
            <button type="button" onClick={prevStep} style={styles.button(false)}>
              Back
            </button>
            <button type="submit" style={styles.button(true)}>
              Sign Up
            </button>
          </div>

          <button type="button" style={styles.resend}>
            Resend email
          </button>
        </form>
      </div>
    );
  };

  // Step 3: Purpose Selection
  const PurposeSelection = () => {
    const purposes = [
      'Learn something new',
      'Advance my career',
      'Master a specific skill',
      'Collaborate or network',
      'Support school/university work'
    ];

    const isNextDisabled = formData.purposes.length === 0;

    const styles = {
      container: { padding: '24px' },
      title: { fontSize: '24px', fontWeight: 'bold', color: '#111827', marginBottom: '8px' },
      subtitle: { color: '#6B7280', marginBottom: '24px' },
      option: (isSelected) => ({
        width: '100%',
        textAlign: 'left',
        padding: '16px',
        borderRadius: '8px',
        border: isSelected ? '2px solid #2563EB' : '2px solid #E5E7EB',
        backgroundColor: isSelected ? '#EFF6FF' : 'white',
        color: isSelected ? '#1E40AF' : '#374151',
        marginBottom: '12px',
        cursor: 'pointer'
      }),
      optionContent: { display: 'flex', alignItems: 'center' },
      radio: (isSelected) => ({
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        border: isSelected ? '2px solid #2563EB' : '2px solid #D1D5DB',
        backgroundColor: isSelected ? '#2563EB' : 'white',
        marginRight: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }),
      radioInner: {
        width: '8px',
        height: '8px',
        borderRadius: '50%',
        backgroundColor: 'white'
      },
      buttonContainer: { display: 'flex', gap: '12px', marginTop: '32px' },
      button: (isPrimary = false, isDisabled = false) => ({
        flex: 1,
        padding: '12px 16px',
        borderRadius: '8px',
        fontWeight: '500',
        border: isPrimary ? 'none' : '1px solid #D1D5DB',
        backgroundColor: isDisabled ? '#9CA3AF' : (isPrimary ? '#2563EB' : 'white'),
        color: isPrimary ? 'white' : '#374151',
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        opacity: isDisabled ? 0.6 : 1
      })
    };

    return (
      <div style={styles.container}>
        <h1 style={styles.title}>What brings you here?</h1>
        <p style={styles.subtitle}>Select up to 2 options</p>

        <div style={{ marginBottom: '32px' }}>
          {purposes.map((purpose) => (
            <button
              key={purpose}
              type="button"
              onClick={() => handleArrayToggle('purposes', purpose)}
              style={styles.option(formData.purposes.includes(purpose))}
            >
              <div style={styles.optionContent}>
                <div style={styles.radio(formData.purposes.includes(purpose))}>
                  {formData.purposes.includes(purpose) && <div style={styles.radioInner}></div>}
                </div>
                {purpose}
              </div>
            </button>
          ))}
        </div>

        <div style={styles.buttonContainer}>
          <button onClick={prevStep} style={styles.button(false)}>
            Back
          </button>
          <button
            onClick={nextStep}
            disabled={isNextDisabled}
            style={styles.button(true, isNextDisabled)}
          >
            Next →
          </button>
        </div>
      </div>
    );
  };

  // Step 4: Interest Selection
  const InterestSelection = () => {
    const interests = {
      'Tech': ['Web Dev', 'Mobile Dev', 'ui/ux', 'AI', 'Cybersecurity'],
      'Business': ['Marketing', 'Finance', 'Entrepreneurship'],
      'Creative': ['Design', 'Animation', 'Writing'],
      'Academic': ['Math', 'Science', 'Languages']
    };

    const isNextDisabled = formData.interests.length === 0;

    const styles = {
      container: { padding: '24px' },
      title: { fontSize: '24px', fontWeight: 'bold', color: '#111827', marginBottom: '8px' },
      subtitle: { color: '#6B7280', marginBottom: '24px' },
      search: {
        width: '100%',
        padding: '8px 12px',
        border: '1px solid #D1D5DB',
        borderRadius: '8px',
        fontSize: '14px',
        marginBottom: '16px'
      },
      category: { marginBottom: '24px' },
      categoryTitle: { fontWeight: '600', color: '#111827', marginBottom: '12px' },
      grid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' },
      option: (isSelected) => ({
        textAlign: 'left',
        padding: '12px',
        borderRadius: '8px',
        border: isSelected ? '2px solid #2563EB' : '2px solid #E5E7EB',
        backgroundColor: isSelected ? '#EFF6FF' : 'white',
        color: isSelected ? '#1E40AF' : '#374151',
        cursor: 'pointer'
      }),
      optionContent: { display: 'flex', alignItems: 'center' },
      radio: (isSelected) => ({
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        border: isSelected ? '2px solid #2563EB' : '2px solid #D1D5DB',
        backgroundColor: isSelected ? '#2563EB' : 'white',
        marginRight: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }),
      radioInner: {
        width: '8px',
        height: '8px',
        borderRadius: '50%',
        backgroundColor: 'white'
      },
      buttonContainer: { display: 'flex', gap: '12px', marginTop: '32px' },
      button: (isPrimary = false, isDisabled = false) => ({
        flex: 1,
        padding: '12px 16px',
        borderRadius: '8px',
        fontWeight: '500',
        border: isPrimary ? 'none' : '1px solid #D1D5DB',
        backgroundColor: isDisabled ? '#9CA3AF' : (isPrimary ? '#2563EB' : 'white'),
        color: isPrimary ? 'white' : '#374151',
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        opacity: isDisabled ? 0.6 : 1
      })
    };

    return (
      <div style={styles.container}>
        <h1 style={styles.title}>Pick your areas of interest</h1>
        <p style={styles.subtitle}>Select up to 5 options</p>

        <input
          type="text"
          placeholder="Find an interest"
          style={styles.search}
        />

        <div style={{ marginBottom: '32px' }}>
          {Object.entries(interests).map(([category, items]) => (
            <div key={category} style={styles.category}>
              <h3 style={styles.categoryTitle}>{category}</h3>
              <div style={styles.grid}>
                {items.map((interest) => (
                  <button
                    key={interest}
                    type="button"
                    onClick={() => handleArrayToggle('interests', interest)}
                    style={styles.option(formData.interests.includes(interest))}
                  >
                    <div style={styles.optionContent}>
                      <div style={styles.radio(formData.interests.includes(interest))}>
                        {formData.interests.includes(interest) && <div style={styles.radioInner}></div>}
                      </div>
                      {interest}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={styles.buttonContainer}>
          <button onClick={prevStep} style={styles.button(false)}>
            Back
          </button>
          <button
            onClick={nextStep}
            disabled={isNextDisabled}
            style={styles.button(true, isNextDisabled)}
          >
            Next →
          </button>
        </div>
      </div>
    );
  };

  // Step 5: Role Selection
  const RoleSelection = () => {
    const roles = [
      'Student',
      'Working Professional',
      'Intern / Trainee',
      'Freelancer / Self-employed',
      'Job Seeker',
      'Other'
    ];

    const isNextDisabled = !formData.currentRole;

    const styles = {
      container: { padding: '24px' },
      title: { fontSize: '24px', fontWeight: 'bold', color: '#111827', marginBottom: '8px' },
      subtitle: { color: '#6B7280', marginBottom: '24px' },
      search: {
        width: '100%',
        padding: '8px 12px',
        border: '1px solid #D1D5DB',
        borderRadius: '8px',
        fontSize: '14px',
        marginBottom: '16px'
      },
      option: (isSelected) => ({
        width: '100%',
        textAlign: 'left',
        padding: '16px',
        borderRadius: '8px',
        border: isSelected ? '2px solid #2563EB' : '2px solid #E5E7EB',
        backgroundColor: isSelected ? '#EFF6FF' : 'white',
        color: isSelected ? '#1E40AF' : '#374151',
        marginBottom: '12px',
        cursor: 'pointer'
      }),
      optionContent: { display: 'flex', alignItems: 'center' },
      radio: (isSelected) => ({
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        border: isSelected ? '2px solid #2563EB' : '2px solid #D1D5DB',
        backgroundColor: isSelected ? '#2563EB' : 'white',
        marginRight: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }),
      radioInner: {
        width: '8px',
        height: '8px',
        borderRadius: '50%',
        backgroundColor: 'white'
      },
      buttonContainer: { display: 'flex', gap: '12px', marginTop: '32px' },
      button: (isPrimary = false, isDisabled = false) => ({
        flex: 1,
        padding: '12px 16px',
        borderRadius: '8px',
        fontWeight: '500',
        border: isPrimary ? 'none' : '1px solid #D1D5DB',
        backgroundColor: isDisabled ? '#9CA3AF' : (isPrimary ? '#2563EB' : 'white'),
        color: isPrimary ? 'white' : '#374151',
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        opacity: isDisabled ? 0.6 : 1
      })
    };

    return (
      <div style={styles.container}>
        <h1 style={styles.title}>Your Current Role</h1>
        <p style={styles.subtitle}>Select 1 option</p>

        <input
          type="text"
          placeholder="Find a role"
          style={styles.search}
        />

        <div style={{ marginBottom: '32px' }}>
          {roles.map((role) => (
            <button
              key={role}
              type="button"
              onClick={() => handleInputChange('currentRole', role)}
              style={styles.option(formData.currentRole === role)}
            >
              <div style={styles.optionContent}>
                <div style={styles.radio(formData.currentRole === role)}>
                  {formData.currentRole === role && <div style={styles.radioInner}></div>}
                </div>
                {role}
              </div>
            </button>
          ))}
        </div>

        <div style={styles.buttonContainer}>
          <button onClick={prevStep} style={styles.button(false)}>
            Back
          </button>
          <button
            onClick={nextStep}
            disabled={isNextDisabled}
            style={styles.button(true, isNextDisabled)}
          >
            Next →
          </button>
        </div>
      </div>
    );
  };

  // Step 6: Education Selection
  const EducationSelection = () => {
    const educationLevels = [
      'Less than high school diploma',
      'High school diploma',
      'Bachelor\'s degree',
      'Master\'s degree',
      'Doctorate degree'
    ];

    const isFinishDisabled = !formData.educationLevel;

    const handleFinish = () => {
      console.log('Form completed:', formData);
      alert('Signup completed successfully!');
    };

    const styles = {
      container: { padding: '24px' },
      title: { fontSize: '24px', fontWeight: 'bold', color: '#111827', marginBottom: '8px' },
      option: (isSelected) => ({
        width: '100%',
        textAlign: 'left',
        padding: '16px',
        borderRadius: '8px',
        border: isSelected ? '2px solid #2563EB' : '2px solid #E5E7EB',
        backgroundColor: isSelected ? '#EFF6FF' : 'white',
        color: isSelected ? '#1E40AF' : '#374151',
        marginBottom: '12px',
        cursor: 'pointer'
      }),
      optionContent: { display: 'flex', alignItems: 'center' },
      radio: (isSelected) => ({
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        border: isSelected ? '2px solid #2563EB' : '2px solid #D1D5DB',
        backgroundColor: isSelected ? '#2563EB' : 'white',
        marginRight: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }),
      radioInner: {
        width: '8px',
        height: '8px',
        borderRadius: '50%',
        backgroundColor: 'white'
      },
      buttonContainer: { display: 'flex', gap: '12px', marginTop: '32px' },
      button: (isPrimary = false, isDisabled = false) => ({
        flex: 1,
        padding: '12px 16px',
        borderRadius: '8px',
        fontWeight: '500',
        border: isPrimary ? 'none' : '1px solid #D1D5DB',
        backgroundColor: isDisabled ? '#9CA3AF' : (isPrimary ? '#2563EB' : 'white'),
        color: isPrimary ? 'white' : '#374151',
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        opacity: isDisabled ? 0.6 : 1
      })
    };

    return (
      <div style={styles.container}>
        <h1 style={styles.title}>What's your highest level of education?</h1>

        <div style={{ marginBottom: '32px' }}>
          {educationLevels.map((level) => (
            <button
              key={level}
              type="button"
              onClick={() => handleInputChange('educationLevel', level)}
              style={styles.option(formData.educationLevel === level)}
            >
              <div style={styles.optionContent}>
                <div style={styles.radio(formData.educationLevel === level)}>
                  {formData.educationLevel === level && <div style={styles.radioInner}></div>}
                </div>
                {level}
              </div>
            </button>
          ))}
        </div>

        <div style={styles.buttonContainer}>
          <button onClick={prevStep} style={styles.button(false)}>
            Back
          </button>
          <button
            onClick={handleFinish}
            disabled={isFinishDisabled}
            style={styles.button(true, isFinishDisabled)}
          >
            Finished →
          </button>
        </div>
      </div>
    );
  };

  // Main render function
  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <CreateAccount />;
      case 2:
        return <VerifyEmail />;
      case 3:
        return <PurposeSelection />;
      case 4:
        return <InterestSelection />;
      case 5:
        return <RoleSelection />;
      case 6:
        return <EducationSelection />;
      default:
        return <CreateAccount />;
    }
  };

  const appStyles = {
    minHeight: '100vh',
    backgroundColor: '#F9FAFB',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '16px'
  };

  const containerStyles = {
    width: '100%',
    maxWidth: '400px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    border: '1px solid #E5E7EB'
  };

  return (
    <div style={appStyles}>
      <div style={containerStyles}>
        {renderCurrentStep()}
      </div>
    </div>
  );
};

export default SignupFlow;