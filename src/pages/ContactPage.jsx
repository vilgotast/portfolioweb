import React from 'react';
import { useForm } from 'react-hook-form';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const ContactPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Here you would typically send the data to a server
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header isStartPage={false} />
      <main className="container mx-auto px-4 py-32 max-w-2xl">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Me</h1>
        <div className="mb-8 flex justify-center">
          <Avatar className="h-32 w-32">
            <AvatarImage src="/path-to-your-image.jpg" alt="Profile Picture" />
            <AvatarFallback>VA</AvatarFallback>
          </Avatar>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              {...register("email", { required: "Email is required" })}
              className="bg-gray-800 text-white"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>
          <div>
            <Label htmlFor="linkedin">LinkedIn</Label>
            <Input
              id="linkedin"
              type="url"
              {...register("linkedin", { required: "LinkedIn profile is required" })}
              className="bg-gray-800 text-white"
            />
            {errors.linkedin && <p className="text-red-500 text-sm mt-1">{errors.linkedin.message}</p>}
          </div>
          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              {...register("phone", { required: "Phone number is required" })}
              className="bg-gray-800 text-white"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
          </div>
          <div>
            <Label htmlFor="cv">Download CV</Label>
            <Button
              id="cv"
              type="button"
              onClick={() => window.open('/path-to-your-cv.pdf', '_blank')}
              className="w-full bg-blue-600 hover:bg-blue-700"
            >
              Download CV
            </Button>
          </div>
          <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
            Send
          </Button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;