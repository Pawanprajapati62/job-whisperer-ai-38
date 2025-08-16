import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Navigation from "@/components/Navigation";
import { Upload, X, Plus, User, Mail, Save, Bell } from "lucide-react";

const Profile = () => {
  const [fullName, setFullName] = useState("Jane Doe");
  const [email, setEmail] = useState("jane.doe@example.com");
  const [skills, setSkills] = useState(["React", "TypeScript", "Tailwind CSS"]);
  const [newSkill, setNewSkill] = useState("");
  const [emailReminders, setEmailReminders] = useState(true);
  const [reminderFrequency, setReminderFrequency] = useState("daily");

  const addSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill("");
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      addSkill();
    }
  };

  const handleSaveChanges = () => {
    console.log("Saving profile changes:", {
      fullName,
      email,
      skills,
      emailReminders,
      reminderFrequency
    });
    // Here you would typically save to your backend
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation isAuthenticated={true} />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Profile & Settings</h1>
          <p className="text-muted-foreground">Manage your personal information and application preferences</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* My Profile Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                My Profile
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Profile Picture */}
              <div className="flex flex-col items-center space-y-4">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                  <User className="h-12 w-12 text-primary" />
                </div>
                <Button variant="outline" size="sm">
                  <Upload className="h-4 w-4 mr-2" />
                  Change Photo
                </Button>
              </div>

              {/* Form Fields */}
              <div className="space-y-4">
                <div>
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1"
                  />
                </div>
              </div>

              {/* Resume Upload */}
              <div>
                <Label>Resume</Label>
                <div className="mt-2 border-2 border-dashed border-border rounded-lg p-6 text-center">
                  <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground mb-2">
                    Drop your resume here or click to upload
                  </p>
                  <Button variant="outline" size="sm">
                    <Upload className="h-4 w-4 mr-2" />
                    Upload Resume
                  </Button>
                </div>
              </div>

              {/* Skills Section */}
              <div>
                <Label>Skills</Label>
                <div className="mt-2 space-y-3">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Add a skill"
                      value={newSkill}
                      onChange={(e) => setNewSkill(e.target.value)}
                      onKeyPress={handleKeyPress}
                      className="text-sm"
                    />
                    <Button size="sm" onClick={addSkill} variant="outline">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="flex items-center gap-1 px-2 py-1"
                      >
                        {skill}
                        <button
                          onClick={() => removeSkill(skill)}
                          className="ml-1 hover:text-destructive"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Application Settings Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bell className="h-5 w-5 mr-2" />
                Application Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Email Reminders */}
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="email-reminders" className="text-base font-medium">
                    Email Reminders
                  </Label>
                  <p className="text-sm text-muted-foreground mt-1">
                    Get notified about application deadlines and updates
                  </p>
                </div>
                <Switch
                  id="email-reminders"
                  checked={emailReminders}
                  onCheckedChange={setEmailReminders}
                />
              </div>

              {/* Reminder Frequency */}
              {emailReminders && (
                <div>
                  <Label className="text-base font-medium mb-3 block">
                    Reminder Frequency
                  </Label>
                  <RadioGroup
                    value={reminderFrequency}
                    onValueChange={setReminderFrequency}
                    className="space-y-3"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="daily" id="daily" />
                      <Label htmlFor="daily" className="text-sm">
                        Daily
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="weekly" id="weekly" />
                      <Label htmlFor="weekly" className="text-sm">
                        Weekly
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
              )}

              {/* Additional Settings Placeholder */}
              <div className="pt-4 border-t border-border">
                <h3 className="text-sm font-medium mb-3">Notification Preferences</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="new-matches" className="text-sm">
                      New job matches
                    </Label>
                    <Switch id="new-matches" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="application-updates" className="text-sm">
                      Application updates
                    </Label>
                    <Switch id="application-updates" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="weekly-digest" className="text-sm">
                      Weekly digest
                    </Label>
                    <Switch id="weekly-digest" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Save Changes Button */}
        <div className="mt-8 flex justify-end">
          <Button onClick={handleSaveChanges} className="btn-glow">
            <Save className="h-4 w-4 mr-2" />
            Save Changes
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Profile;