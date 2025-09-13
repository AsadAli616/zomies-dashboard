import { useState } from 'react';
import { Camera, Bell, Globe, Shield, User, Mail, Calendar, MapPin, Award } from 'lucide-react';
import foxMascot from '@/assets/fox-mascot.png';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('personal');
  const [notifications, setNotifications] = useState({
    quizReminders: true,
    performanceUpdates: true,
    newContent: false,
    weeklyDigest: true,
  });

  const userProfile = {
    name: 'Jack Thompson',
    email: 'jack.thompson@email.com',
    avatar: foxMascot,
    level: 'A-Level',
    class: 'Year 12',
    school: 'Cambridge International School',
    location: 'London, UK',
    timezone: 'GMT+0',
    joinDate: '2023-09-15',
    streakDays: 12,
    totalXP: 2847,
    badges: ['Quiz Master', 'Study Streak', 'Perfect Score', 'Night Owl'],
  };

  const achievements = [
    { name: 'Quiz Master', description: 'Completed 50+ quizzes', earned: '2024-01-10', rarity: 'gold' },
    { name: 'Study Streak', description: '7-day study streak', earned: '2024-01-20', rarity: 'silver' },
    { name: 'Perfect Score', description: 'Scored 100% on a quiz', earned: '2024-01-15', rarity: 'gold' },
    { name: 'Night Owl', description: 'Studied after midnight', earned: '2024-01-18', rarity: 'bronze' },
  ];

  const subjects = ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English Literature'];
  const timezones = ['GMT+0 (London)', 'EST (New York)', 'PST (Los Angeles)', 'CET (Paris)', 'JST (Tokyo)'];

  const tabs = [
    { id: 'personal', name: 'Personal Info', icon: User },
    { id: 'notifications', name: 'Notifications', icon: Bell },
    { id: 'preferences', name: 'Preferences', icon: Globe },
    { id: 'achievements', name: 'Achievements', icon: Award },
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'gold': return 'text-accent border-accent bg-accent/10';
      case 'silver': return 'text-primary border-primary bg-primary/10';
      case 'bronze': return 'text-muted-foreground border-muted bg-muted/10';
      default: return 'text-muted-foreground border-muted bg-muted/10';
    }
  };

  return (
    <div className="min-h-screen">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gradient mb-2">Profile Settings</h1>
          <p className="text-muted-foreground">Manage your account settings and preferences</p>
        </div>

        {/* Profile Summary Card */}
        <div className="card-neumorphic mb-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="relative">
              <img 
                src={userProfile.avatar} 
                alt="Profile Avatar" 
                className="w-24 h-24 rounded-full bg-gradient-to-br from-accent to-accent-light p-2"
              />
              <button className="absolute bottom-0 right-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary-light transition-colors">
                <Camera size={14} />
              </button>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-bold text-gradient mb-2">{userProfile.name}</h2>
              <p className="text-muted-foreground mb-4">{userProfile.level} Student at {userProfile.school}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-xl font-bold text-accent-gradient">{userProfile.streakDays}</div>
                  <div className="text-xs text-muted-foreground">Day Streak</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-gradient">{userProfile.totalXP}</div>
                  <div className="text-xs text-muted-foreground">Total XP</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-accent-gradient">{userProfile.badges.length}</div>
                  <div className="text-xs text-muted-foreground">Badges Earned</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="card-neumorphic mb-8">
          <div className="flex flex-wrap gap-1 p-1 bg-secondary/50 rounded-lg">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-white shadow-sm text-primary'
                      : 'text-muted-foreground hover:text-foreground hover:bg-white/50'
                  }`}
                >
                  <Icon size={16} />
                  <span>{tab.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content */}
        <div className="card-neumorphic">
          {activeTab === 'personal' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gradient">Personal Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    defaultValue={userProfile.name}
                    className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    defaultValue={userProfile.email}
                    className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Academic Level</label>
                  <select
                    defaultValue={userProfile.level}
                    className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/20"
                  >
                    <option>O-Level</option>
                    <option>A-Level</option>
                    <option>SAT</option>
                    <option>IB</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Class/Year</label>
                  <input
                    type="text"
                    defaultValue={userProfile.class}
                    className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-2">School/Institution</label>
                  <input
                    type="text"
                    defaultValue={userProfile.school}
                    className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>
              
              <button className="btn-cta px-6 py-2">
                Save Changes
              </button>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gradient">Notification Preferences</h3>
              
              <div className="space-y-4">
                {Object.entries(notifications).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between p-4 bg-secondary/30 rounded-lg">
                    <div>
                      <h4 className="font-medium capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {key === 'quizReminders' && 'Get notified about scheduled quizzes'}
                        {key === 'performanceUpdates' && 'Receive weekly performance summaries'}
                        {key === 'newContent' && 'Alerts for new notes and quizzes'}
                        {key === 'weeklyDigest' && 'Weekly study progress digest'}
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={value}
                        onChange={(e) => setNotifications(prev => ({
                          ...prev,
                          [key]: e.target.checked
                        }))}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-secondary peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'preferences' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gradient">Study Preferences</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Primary Subjects</label>
                  <div className="space-y-2">
                    {subjects.map(subject => (
                      <label key={subject} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          defaultChecked={['Mathematics', 'Physics', 'Chemistry'].includes(subject)}
                          className="rounded border-border"
                        />
                        <span className="text-sm">{subject}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Timezone</label>
                  <select
                    defaultValue="GMT+0 (London)"
                    className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/20"
                  >
                    {timezones.map(tz => (
                      <option key={tz} value={tz}>{tz}</option>
                    ))}
                  </select>
                  
                  <label className="block text-sm font-medium mt-4 mb-2">Study Reminder Time</label>
                  <input
                    type="time"
                    defaultValue="18:00"
                    className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>
              
              <button className="btn-cta px-6 py-2">
                Save Preferences
              </button>
            </div>
          )}

          {activeTab === 'achievements' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gradient">Achievements & Badges</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className={`p-4 rounded-lg border-2 ${getRarityColor(achievement.rarity)}`}>
                    <div className="flex items-center space-x-3 mb-2">
                      <Award className={`w-6 h-6 ${getRarityColor(achievement.rarity).split(' ')[0]}`} />
                      <h4 className="font-semibold">{achievement.name}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{achievement.description}</p>
                    <div className="text-xs text-muted-foreground">
                      Earned on {new Date(achievement.earned).toLocaleDateString()}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center p-6 bg-secondary/30 rounded-lg">
                <Award className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                <h4 className="font-semibold mb-2">More Badges Coming Soon!</h4>
                <p className="text-sm text-muted-foreground">
                  Keep studying to unlock more achievements and show off your progress.
                </p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Profile;