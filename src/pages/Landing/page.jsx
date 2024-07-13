import Link from "next/link"
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

function LandingPage() {

  const linkClassNames = 'inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50';

  return (
    (<div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        {/* hero section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-6">
            <div className="flex flex-col justify-center space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Rag Picking Made Easy
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Our service simplifies recycling old clothes and textiles. Let us handle the hassle while you focus on sustainable living.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="#" className={linkClassNames} prefetch={false}>
                  Get Started
                </Link>
                <Link href="#" className={`${linkClassNames} border border-input bg-background hover:bg-accent hover:text-accent-foreground`} prefetch={false}>
                  Learn More
                </Link>
              </div>
            </div>
            <Image
              src="/placeholder.svg"
              width="600"
              height="600"
              alt="Hero"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
            />
          </div>
        </section>
        {/* benefits of rag picking */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div
              className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Benefits of Rag Picking</h2>
                <p
                  className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our rag-picking service offers a convenient and eco-friendly way to recycle your old clothes and
                  textiles. Here are some of the key benefits:
                </p>
              </div>
            </div>
            <div
              className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="grid gap-1">
                <RecycleIcon className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Sustainable Recycling</h3>
                <p className="text-muted-foreground">
                  We ensure your old textiles are properly recycled, reducing waste and supporting a circular economy.
                </p>
              </div>
              <div className="grid gap-1">
                <TruckIcon className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Convenient Pickup</h3>
                <p className="text-muted-foreground">
                  Schedule a pickup at your convenience and we will handle the rest. No need to worry about dropping off
                  your items.
                </p>
              </div>
              <div className="grid gap-1">
                <DollarSignIcon className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Earn Cash</h3>
                <p className="text-muted-foreground">
                  We will pay you for your old clothes and textiles, giving you an extra source of income.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* how it works */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How It Works</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our rag-picking process is simple and straightforward. Here is how it works:
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              {[
                {
                  icon: <BoxIcon className="h-12 w-12 text-primary" />,
                  title: 'Schedule Pickup',
                  description: 'Request a pickup at your convenience, and we will send a representative to collect your old clothes and textiles.',
                },
                {
                  icon: <ScissorsIcon className="h-12 w-12 text-primary" />,
                  title: 'Sorting and Processing',
                  description: 'Our team will carefully sort and process your items, ensuring they are properly recycled or repurposed.',
                },
                {
                  icon: <DollarSignIcon className="h-12 w-12 text-primary" />,
                  title: 'Get Paid',
                  description: 'We will pay you for your old clothes and textiles, providing an additional source of income.',
                },
              ].map((step, index) => (
                <div key={index} className="grid gap-1">
                  {step.icon}
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* testimonials */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Customers Say</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from some of our satisfied customers who have experienced the convenience and benefits of our
                rag-picking service.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              {[
                { name: 'John Doe', quote: 'Rag Pickers made it so easy to recycle my old clothes. They handled everything, and I even got paid for it! It was good as my clothes were put to use.' },
                { name: 'Jane Appleseed', quote: 'I was hesitant at first, but Rag Pickers made the process so seamless. Now I feel good knowing my old clothes are being recycled responsibly.' },
                { name: 'Sarah Miller', quote: 'Rag Pickers has been a game-changer for me. I no longer have to worry about what to do with my old clothes, and the extra cash is a nice bonus.' },
                { name: 'Alex Johnson', quote: 'Rag Pickers made decluttering my closet a breeze. I am glad my old clothes are being put to good use.' },
                { name: 'Emily Chen', quote: 'I love how Rag Pickers handles everything. It is a win- win – I get rid of old clothes and contribute to sustainability.' },
                { name: 'David Rodriguez', quote: 'Rag Pickers is a fantastic service. My old clothes are recycled, and I even earned a little extra cash!' }
              ].map((customer, index) => (
                <Card key={index}>
                  <CardContent className="space-y-4 p-4">
                    <div className="space-y-2">
                      <QuoteIcon className="h-8 w-8 text-primary" />
                      <p className="text-muted-foreground">{customer.quote}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>{customer.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="text-sm font-semibold">{customer.name}</h4>
                        <p className="text-xs text-muted-foreground">Satisfied Customer</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        {/* join our movement */}
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Join the Rag Picking Movement
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Start making a difference in your community and earn extra income by becoming a rag picker today.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Join Now
              </Link>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>)
  );
}

function BoxIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>)
  );
}

function DollarSignIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>)
  );
}

function QuoteIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
      <path
        d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
    </svg>)
  );
}

function RecycleIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5" />
      <path
        d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12" />
      <path d="m14 16-3 3 3 3" />
      <path d="M8.293 13.596 7.196 9.5 3.1 10.598" />
      <path
        d="m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843" />
      <path d="m13.378 9.633 4.096 1.098 1.097-4.096" />
    </svg>)
  );
}

function ScissorsIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="6" cy="6" r="3" />
      <path d="M8.12 8.12 12 12" />
      <path d="M20 4 8.12 15.88" />
      <circle cx="6" cy="18" r="3" />
      <path d="M14.8 14.8 20 20" />
    </svg>)
  );
}

function TruckIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M15 18H9" />
      <path
        d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
      <circle cx="17" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
    </svg>)
  );
}

function XIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>)
  );
}

export default LandingPage