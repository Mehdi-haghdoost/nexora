import { Button, Card, CardHeader, CardBody } from "@nextui-org/react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="text-center space-y-6">
        
        {/* Title */}
        <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Welcome to Nexora! 🚀
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-md">
          Where connections come alive - Your modern social network
        </p>

        {/* NextUI Card */}
        <Card className="max-w-md mx-auto">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <h4 className="font-bold text-large">NextUI + Tailwind v4</h4>
            <small className="text-default-500">Everything working perfectly!</small>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <div className="flex gap-2 justify-center">
              <Button color="primary" variant="solid">
                Get Started
              </Button>
              <Button color="secondary" variant="bordered">
                Learn More
              </Button>
            </div>
          </CardBody>
        </Card>

        {/* Features */}
        <div className="grid grid-cols-3 gap-4 mt-8">
          <div className="text-center p-4 rounded-lg bg-white/50 dark:bg-gray-800/50">
            <span className="text-2xl">📱</span>
            <p className="mt-2 text-sm">Posts & Stories</p>
          </div>
          <div className="text-center p-4 rounded-lg bg-white/50 dark:bg-gray-800/50">
            <span className="text-2xl">💬</span>
            <p className="mt-2 text-sm">Real-time Chat</p>
          </div>
          <div className="text-center p-4 rounded-lg bg-white/50 dark:bg-gray-800/50">
            <span className="text-2xl">🎵</span>
            <p className="mt-2 text-sm">Music & Games</p>
          </div>
        </div>

      </div>
    </main>
  );
}