"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, ArrowRight, ArrowLeft, Sparkles, Target, Users, Zap } from 'lucide-react';
import Navigation from '@/components/ui/navigation';

const onboardingSteps = [
  {
    id: 1,
    title: "Welcome to MyApp!",
    description: "We're excited to have you on board. Let's get you set up for success.",
    icon: Sparkles,
    content: (
      <div className="text-center space-y-6">
        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto flex items-center justify-center">
          <Sparkles className="w-10 h-10 text-white" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Welcome to the future</h3>
          <p className="text-gray-600 leading-relaxed">
            You've just joined thousands of users who are already experiencing the power of our platform. 
            Let's take a quick tour to help you get the most out of your new account.
          </p>
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: "Set Your Goals",
    description: "Define what you want to achieve with our platform.",
    icon: Target,
    content: (
      <div className="space-y-6">
        <div className="text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-600 rounded-full mx-auto flex items-center justify-center mb-4">
            <Target className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">What's your main goal?</h3>
          <p className="text-gray-600 mb-6">Select the areas that matter most to you:</p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {['Productivity', 'Analytics', 'Collaboration', 'Growth'].map((goal) => (
            <div key={goal} className="p-4 border-2 border-gray-200 rounded-lg hover:border-gray-900 cursor-pointer transition-all duration-200 hover:shadow-md">
              <div className="text-center">
                <div className="w-8 h-8 bg-gray-100 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-gray-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">{goal}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: "Connect & Collaborate",
    description: "Learn how to work with your team and share your progress.",
    icon: Users,
    content: (
      <div className="text-center space-y-6">
        <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-full mx-auto flex items-center justify-center">
          <Users className="w-10 h-10 text-white" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Better together</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Invite your team members, share projects, and collaborate in real-time. 
            Our platform is designed to bring teams together.
          </p>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-center space-x-4">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full border-2 border-white"></div>
              ))}
            </div>
            <span className="text-sm text-gray-600">+12 team members</span>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 4,
    title: "You're All Set!",
    description: "Ready to start your journey with all the tools you need.",
    icon: Zap,
    content: (
      <div className="text-center space-y-6">
        <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full mx-auto flex items-center justify-center">
          <Zap className="w-10 h-10 text-white" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Ready to launch!</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            You're all set up and ready to explore everything our platform has to offer. 
            Let's head to your dashboard and start building something amazing.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: 'Projects', value: '0' },
            { label: 'Team Members', value: '1' },
            { label: 'Storage', value: '5GB' }
          ].map((stat) => (
            <div key={stat.label} className="bg-gray-50 rounded-lg p-3">
              <div className="text-xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-xs text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    )
  }
];

export default function OnboardingPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [isCompleting, setIsCompleting] = useState(false);

  const progress = ((currentStep + 1) / onboardingSteps.length) * 100;
  const isLastStep = currentStep === onboardingSteps.length - 1;
  const isFirstStep = currentStep === 0;

  const handleNext = () => {
    if (isLastStep) {
      setIsCompleting(true);
      setTimeout(() => {
        router.push('/dashboard');
      }, 2000);
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (!isFirstStep) {
      setCurrentStep(currentStep - 1);
    }
  };

  const currentStepData = onboardingSteps[currentStep];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navigation />
      
      <div className="flex items-center justify-center px-4 py-12">
        <Card className="w-full max-w-2xl shadow-xl border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center pb-6">
            <div className="flex items-center justify-between mb-4">
              <Badge variant="secondary" className="px-3 py-1">
                Step {currentStep + 1} of {onboardingSteps.length}
              </Badge>
              <Badge variant="outline" className="px-3 py-1">
                {Math.round(progress)}% Complete
              </Badge>
            </div>
            
            <Progress value={progress} className="mb-6 h-2" />
            
            <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
              {currentStepData.title}
            </CardTitle>
            <CardDescription className="text-gray-600">
              {currentStepData.description}
            </CardDescription>
          </CardHeader>

          <CardContent className="px-8 py-6">
            <div className="min-h-[300px] flex items-center justify-center">
              {currentStepData.content}
            </div>
          </CardContent>

          <div className="px-8 py-6 bg-gray-50 rounded-b-lg">
            <div className="flex justify-between items-center">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={isFirstStep}
                className="flex items-center space-x-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Previous</span>
              </Button>

              <div className="flex space-x-2">
                {onboardingSteps.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index <= currentStep ? 'bg-gray-900' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              <Button
                onClick={handleNext}
                disabled={isCompleting}
                className="bg-gray-900 hover:bg-gray-800 text-white flex items-center space-x-2 group"
              >
                {isCompleting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Completing...</span>
                  </>
                ) : (
                  <>
                    <span>{isLastStep ? 'Get Started' : 'Next'}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}