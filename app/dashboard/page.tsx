"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { fetchUserData } from "@/lib/api";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  const router = useRouter();
  const [name, setName] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      if (typeof window === "undefined") return;

      const token = localStorage.getItem("authToken");
      if (!token) {
        router.replace("/login");
        return;
      }

      try {
        const cachedName = localStorage.getItem("authUserName");
        if (cachedName) {
          setName(cachedName);
        }

        const res = await fetchUserData(token);
        if (res?.data?.name) {
          setName(res.data.name);
          localStorage.setItem("authUserName", res.data.name);
        }
      } catch {
        localStorage.removeItem("authToken");
        localStorage.removeItem("authUserName");
        router.replace("/login");
        return;
      } finally {
        setLoading(false);
      }
    };

    void init();
  }, [router]);

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("authToken");
      localStorage.removeItem("authUserName");
    }
    router.replace("/login");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-sm text-muted-foreground">Loading dashboard...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <Card className="w-full max-w-md p-6 flex flex-col items-center gap-4">
        <h1 className="text-2xl font-semibold text-center">
          Welcome{", "}
          <span className="font-bold">
            {name || "User"}
          </span>
        </h1>
        <p className="text-sm text-muted-foreground text-center">
          You are successfully logged in.
        </p>
        <Button variant="outline" className="mt-2" onClick={handleLogout}>
          Logout
        </Button>
      </Card>
    </div>
  );
}

