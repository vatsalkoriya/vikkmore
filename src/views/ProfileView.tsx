import { UserProfile, SignOutButton, SignIn, Show } from "@clerk/nextjs";
import { LogOut } from "lucide-react";
import { dark } from "@clerk/themes";

const ProfileView = () => {
  return (
    <div className="min-h-full flex flex-col animate-in fade-in duration-500 relative">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-primary/20 via-primary/5 to-transparent pointer-events-none" />
      
      <div className="p-6 pb-24 md:pb-6 relative z-10 max-w-5xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 bg-black/40 p-6 rounded-2xl border border-white/5 backdrop-blur-md shadow-2xl">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight mb-2 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">Your Profile</h1>
            <p className="text-muted-foreground/80">Manage your account details, security, and preferences.</p>
          </div>
          
          <SignOutButton>
            <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-destructive/10 text-destructive hover:bg-destructive/20 hover:text-red-400 font-semibold transition-all shadow-lg hover:shadow-destructive/20 border border-destructive/20">
              <LogOut className="w-4 h-4" />
              Sign Out Securely
            </button>
          </SignOutButton>
        </div>
        
        <div className="flex justify-center w-full">
          <Show when="signed-in">
            <UserProfile 
              routing="hash"
              appearance={{
                baseTheme: dark,
                elements: {
                  rootBox: "w-full shadow-2xl rounded-2xl overflow-hidden border border-white/10",
                  card: "bg-black/80 backdrop-blur-xl shadow-none rounded-2xl w-full",
                  navbar: "bg-sidebar/50 border-r border-white/10 backdrop-blur-md",
                  navbarButton: "text-muted-foreground hover:bg-white/10 hover:text-white transition-colors",
                  navbarButton__active: "bg-primary/20 text-primary font-medium",
                  headerTitle: "text-white font-bold",
                  headerSubtitle: "text-muted-foreground",
                  profileSectionTitleText: "text-white font-semibold",
                  profileSectionContent: "border-white/10 bg-white/5 rounded-xl mt-2",
                  badge: "bg-primary/20 text-primary border-primary/30",
                  formButtonPrimary: "bg-primary text-primary-foreground hover:bg-primary/90 rounded-full font-semibold",
                  formFieldLabel: "text-white/90",
                  formFieldInput: "bg-black/50 border-white/10 text-white rounded-lg focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all",
                  dividerLine: "bg-white/10",
                  dividerText: "text-muted-foreground",
                  scrollBox: "bg-transparent",
                  pageScrollBox: "bg-transparent",
                  footer: "hidden",
                  watermark: "hidden",
                }
              }}
            />
          </Show>
          <Show when="signed-out">
            <div className="flex flex-col items-center justify-center py-12">
              <SignIn routing="hash" />
            </div>
          </Show>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
