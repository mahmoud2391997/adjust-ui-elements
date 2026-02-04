"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { verifyEmail } from "@/lib/api";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export default function VerifyAccountPage() {
  const router = useRouter();
  const [code, setCode] = useState("123456");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem("authToken");
      if (!storedToken) {
        setError("No token found. Please register or login first.");
      } else {
        setToken(storedToken);
      }
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token) return;

    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      await verifyEmail(code, token);
      setSuccess("Account verified successfully. You can now login.");
      setTimeout(() => {
        router.push("/login");
      }, 1200);
    } catch (err: any) {
      setError(err.message || "Verification failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <Card className="w-full max-w-md p-6 space-y-6">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">
            Verify your account
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Enter the 6-digit code sent to your email. For testing, use{" "}
            <span className="font-mono font-semibold">123456</span>.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="code">Verification Code</Label>
            <Input
              id="code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              required
              maxLength={6}
              placeholder="123456"
            />
          </div>

          {error && (
            <p className="text-sm text-destructive" role="alert">
              {error}
            </p>
          )}
          {success && (
            <p className="text-sm text-emerald-600" role="status">
              {success}
            </p>
          )}

          <Button type="submit" className="w-full" disabled={loading || !token}>
            {loading ? "Verifying..." : "Verify"}
          </Button>
        </form>
      </Card>
    </div>
  );
}

