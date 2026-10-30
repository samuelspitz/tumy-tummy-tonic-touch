import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowLeft, ArrowRight, Check, CheckCircle2, Eye, EyeOff, Loader2, Quote } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Logo from "@/components/Logo";
import { cn } from "@/lib/utils";

const concerns = [
  "Bloating & gas",
  "IBS",
  "Acid reflux / heartburn",
  "Food sensitivities",
  "Constipation",
  "General gut health",
];

const frequencies = [
  { value: "daily", label: "Daily" },
  { value: "weekly", label: "A few times a week" },
  { value: "occasionally", label: "Occasionally" },
];

const passwordRules = [
  { label: "At least 8 characters", test: (v: string) => v.length >= 8 },
  { label: "Upper & lowercase letters", test: (v: string) => /[a-z]/.test(v) && /[A-Z]/.test(v) },
  { label: "At least one number", test: (v: string) => /\d/.test(v) },
  { label: "At least one symbol", test: (v: string) => /[^A-Za-z0-9]/.test(v) },
];

const strengthLabels = ["Too weak", "Weak", "Fair", "Good", "Strong"];
const strengthColors = ["bg-gray-200", "bg-red-500", "bg-orange-500", "bg-yellow-500", "bg-emerald-500"];

const accountSchema = z
  .object({
    firstName: z.string().trim().min(1, "First name is required").max(50),
    lastName: z.string().trim().min(1, "Last name is required").max(50),
    email: z.string().trim().email("Enter a valid email address"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[a-z]/, "Include a lowercase letter")
      .regex(/[A-Z]/, "Include an uppercase letter")
      .regex(/\d/, "Include a number"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((d) => d.password === d.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

const profileSchema = z.object({
  primaryConcern: z.string().min(1, "Select your main concern"),
  symptomFrequency: z.string().min(1, "Select how often you have symptoms"),
  newsletter: z.boolean(),
  terms: z.boolean().refine((v) => v, "You must accept the terms to continue"),
});

const signupSchema = accountSchema.and(profileSchema);
type SignupValues = z.infer<typeof signupSchema>;

const accountFields = ["firstName", "lastName", "email", "password", "confirmPassword"] as const;
const steps = ["Account", "Your gut profile"];

const PasswordStrength = ({ value }: { value: string }) => {
  const score = passwordRules.filter((r) => r.test(value)).length;
  return (
    <div className="space-y-2">
      <div className="flex gap-1">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className={cn(
              "h-1.5 flex-1 rounded-full transition-colors",
              score >= i ? strengthColors[score] : "bg-gray-200"
            )}
          />
        ))}
      </div>
      <p className="text-xs text-muted-foreground">
        Strength: <span className="font-medium text-gray-700">{strengthLabels[score]}</span>
      </p>
      <ul className="grid grid-cols-1 gap-1 sm:grid-cols-2">
        {passwordRules.map((rule) => {
          const ok = rule.test(value);
          return (
            <li
              key={rule.label}
              className={cn("flex items-center gap-1.5 text-xs", ok ? "text-emerald-600" : "text-muted-foreground")}
            >
              <Check className={cn("h-3.5 w-3.5", ok ? "opacity-100" : "opacity-30")} />
              {rule.label}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const Signup = () => {
  const [step, setStep] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [submittedName, setSubmittedName] = useState<string | null>(null);

  const form = useForm<SignupValues>({
    resolver: zodResolver(signupSchema),
    mode: "onTouched",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      primaryConcern: "",
      symptomFrequency: "",
      newsletter: true,
      terms: false,
    },
  });

  const password = form.watch("password");

  const goNext = async () => {
    if (await form.trigger(accountFields, { shouldFocus: true })) setStep(1);
  };

  const onSubmit = async (values: SignupValues) => {
    // TODO: replace with a real API call once a backend exists.
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmittedName(values.firstName);
    toast.success("Account created", { description: `Welcome to Tumy, ${values.firstName}!` });
  };

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <aside className="relative hidden overflow-hidden lg:sticky lg:top-0 lg:h-screen bg-gradient-to-br from-emerald-600 to-blue-600 p-12 text-white lg:flex lg:flex-col lg:justify-between">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-white/10 blur-2xl" />

        <Logo light className="relative" />

        <div className="relative space-y-8">
          <h2 className="text-4xl font-bold leading-tight">
            Your personalized path to a happier gut starts here.
          </h2>
          <ul className="space-y-4 text-emerald-50">
            {[
              "Identify your personal food triggers",
              "Track symptoms in seconds a day",
              "Get a custom nutrition plan",
              "14-day free trial, no credit card required",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-200" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <figure className="relative rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
          <Quote className="mb-3 h-6 w-6 text-emerald-200" />
          <blockquote className="text-lg leading-relaxed">
            "The AI analysis spotted patterns I never noticed and gave me a clear path to healing."
          </blockquote>
          <figcaption className="mt-4 text-sm text-emerald-100">Michael Chen, Software Developer</figcaption>
        </figure>
      </aside>

      <main className="flex flex-col bg-gray-50 px-4 py-8 sm:px-8">
        <div className="flex items-center justify-between">
          <Logo className="lg:invisible" />
          <Link to="/" className="flex items-center gap-1 text-sm text-gray-600 hover:text-emerald-600">
            <ArrowLeft className="h-4 w-4" /> Back to home
          </Link>
        </div>

        <div className="mx-auto flex w-full max-w-lg flex-1 flex-col justify-center py-10">
          {submittedName ? (
            <div className="animate-fade-in rounded-2xl bg-white p-10 text-center shadow-xl">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                <CheckCircle2 className="h-9 w-9 text-emerald-600" />
              </div>
              <h1 className="mb-3 text-3xl font-bold text-gray-900">Welcome, {submittedName}!</h1>
              <p className="mb-8 text-gray-600">
                Your account is ready. We've sent a confirmation link to your inbox. Your 14-day free trial starts now.
              </p>
              <Button asChild size="lg" className="rounded-full px-8">
                <Link to="/">Back to home</Link>
              </Button>
            </div>
          ) : (
            <div className="animate-fade-in rounded-2xl bg-white p-6 shadow-xl sm:p-10">
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Create your account</h1>
                <p className="mt-2 text-gray-600">Start your free 14-day trial. No credit card required.</p>
              </div>

              <ol className="mb-8 flex items-center gap-3" aria-label="Signup progress">
                {steps.map((label, i) => (
                  <li key={label} className="flex flex-1 items-center gap-3">
                    <span
                      className={cn(
                        "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold transition-colors",
                        i < step && "bg-emerald-600 text-white",
                        i === step && "bg-emerald-600 text-white ring-4 ring-emerald-100",
                        i > step && "bg-gray-100 text-gray-500"
                      )}
                      aria-current={i === step ? "step" : undefined}
                    >
                      {i < step ? <Check className="h-4 w-4" /> : i + 1}
                    </span>
                    <span className={cn("text-sm font-medium", i <= step ? "text-gray-900" : "text-gray-500")}>
                      {label}
                    </span>
                    {i < steps.length - 1 && (
                      <span className={cn("h-px flex-1", step > i ? "bg-emerald-600" : "bg-gray-200")} />
                    )}
                  </li>
                ))}
              </ol>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} noValidate className="space-y-5">
                  {step === 0 && (
                    <div className="animate-fade-in space-y-5">
                      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>First name</FormLabel>
                              <FormControl>
                                <Input autoComplete="given-name" placeholder="Jane" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Last name</FormLabel>
                              <FormControl>
                                <Input autoComplete="family-name" placeholder="Doe" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input type="email" autoComplete="email" placeholder="jane@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Password</FormLabel>
                            <div className="relative">
                              <FormControl>
                                <Input
                                  type={showPassword ? "text" : "password"}
                                  autoComplete="new-password"
                                  placeholder="Create a password"
                                  className="pr-10"
                                  {...field}
                                />
                              </FormControl>
                              <button
                                type="button"
                                onClick={() => setShowPassword((s) => !s)}
                                className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 hover:text-gray-700"
                                aria-label={showPassword ? "Hide password" : "Show password"}
                              >
                                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                              </button>
                            </div>
                            <PasswordStrength value={password} />
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Confirm password</FormLabel>
                            <FormControl>
                              <Input
                                type={showPassword ? "text" : "password"}
                                autoComplete="new-password"
                                placeholder="Re-enter your password"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button type="button" size="lg" className="w-full rounded-full" onClick={goNext}>
                        Continue <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  )}

                  {step === 1 && (
                    <div className="animate-fade-in space-y-6">
                      <FormField
                        control={form.control}
                        name="primaryConcern"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>What's your main digestive concern?</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a concern" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {concerns.map((c) => (
                                  <SelectItem key={c} value={c}>
                                    {c}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormDescription>We'll tailor your plan around this.</FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="symptomFrequency"
                        render={({ field }) => (
                          <FormItem className="space-y-3">
                            <FormLabel>How often do you experience symptoms?</FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                value={field.value}
                                className="grid grid-cols-1 gap-3 sm:grid-cols-3"
                              >
                                {frequencies.map((f) => (
                                  <FormItem key={f.value} className="space-y-0">
                                    <FormLabel
                                      className={cn(
                                        "flex cursor-pointer items-center gap-2 rounded-xl border p-3 text-sm font-normal transition-colors hover:border-emerald-400",
                                        field.value === f.value && "border-emerald-600 bg-emerald-50"
                                      )}
                                    >
                                      <FormControl>
                                        <RadioGroupItem value={f.value} />
                                      </FormControl>
                                      {f.label}
                                    </FormLabel>
                                  </FormItem>
                                ))}
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="space-y-4 rounded-xl bg-gray-50 p-4">
                        <FormField
                          control={form.control}
                          name="newsletter"
                          render={({ field }) => (
                            <FormItem className="flex items-start gap-3 space-y-0">
                              <FormControl>
                                <Checkbox checked={field.value} onCheckedChange={(v) => field.onChange(v === true)} />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel className="font-normal">Send me gut-health tips and product updates</FormLabel>
                              </div>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="terms"
                          render={({ field }) => (
                            <FormItem className="flex items-start gap-3 space-y-0">
                              <FormControl>
                                <Checkbox checked={field.value} onCheckedChange={(v) => field.onChange(v === true)} />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel className="font-normal">
                                  I agree to the{" "}
                                  <a href="#" className="font-medium text-emerald-600 hover:underline">
                                    Terms of Service
                                  </a>{" "}
                                  and{" "}
                                  <a href="#" className="font-medium text-emerald-600 hover:underline">
                                    Privacy Policy
                                  </a>
                                </FormLabel>
                                <FormMessage />
                              </div>
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="flex flex-col-reverse gap-3 sm:flex-row">
                        <Button
                          type="button"
                          variant="outline"
                          size="lg"
                          className="rounded-full sm:w-1/3"
                          onClick={() => setStep(0)}
                          disabled={form.formState.isSubmitting}
                        >
                          <ArrowLeft className="mr-2 h-4 w-4" /> Back
                        </Button>
                        <Button
                          type="submit"
                          size="lg"
                          className="rounded-full sm:flex-1"
                          disabled={form.formState.isSubmitting}
                        >
                          {form.formState.isSubmitting ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Creating account...
                            </>
                          ) : (
                            "Create account"
                          )}
                        </Button>
                      </div>
                    </div>
                  )}
                </form>
              </Form>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Signup;
