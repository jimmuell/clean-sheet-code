
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useAuth } from "@/auth";

const ProfilePage = () => {
  const { user } = useAuth();
  
  // Default values and state
  const [profileData, setProfileData] = useState({
    profilePictureUrl: "https://13b230a26e2df65b20120dfd797ddd2e.cdn.bubble.io/f1743425234044x485647232123858100/uifaces-popular-image%20%284%29.jpg?_gl=1*rz3q8v*_gcl_au*NzMzNjIyMTA2LjE3NDE5NDkyMTA.*_ga*MTQyOTYxMTA5Ny4xNzM5ODEwMDA3*_ga_BFPVR2DEE2*MTc0NjE1MTY0My4yLjAuMTc0NjE1MTY0My42MC4wLjA.",
    firstName: "John",
    lastName: "Doe",
    email: user?.email || "john@gmail.com"
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would save the profile data to the database
    console.log("Saving profile data:", profileData);
    // Here you would typically make an API call to update the profile
  };

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Profile Settings</h1>
      <Card className="shadow-sm">
        <CardContent className="p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Profile picture section */}
            <div className="flex flex-col items-center mb-8">
              <Avatar className="h-28 w-28 mb-4">
                <AvatarImage src={profileData.profilePictureUrl} alt="Profile picture" />
                <AvatarFallback className="text-2xl">
                  {`${profileData.firstName.charAt(0)}${profileData.lastName.charAt(0)}`}
                </AvatarFallback>
              </Avatar>
            </div>

            {/* Profile form fields */}
            <div className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="profilePictureUrl">Profile Picture URL</Label>
                <Input 
                  id="profilePictureUrl"
                  name="profilePictureUrl"
                  value={profileData.profilePictureUrl}
                  onChange={handleInputChange}
                  placeholder="Enter profile picture URL"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input 
                  id="firstName"
                  name="firstName"
                  value={profileData.firstName}
                  onChange={handleInputChange}
                  placeholder="Enter your first name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input 
                  id="lastName"
                  name="lastName"
                  value={profileData.lastName}
                  onChange={handleInputChange}
                  placeholder="Enter your last name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email"
                  name="email"
                  value={profileData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  type="email"
                />
              </div>

              {/* Save button */}
              <Button 
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white mt-6"
              >
                Save Changes
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </>
  );
};

export default ProfilePage;
