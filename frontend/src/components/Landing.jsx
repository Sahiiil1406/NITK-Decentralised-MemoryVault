import React from 'react';
import { Upload, HardDrive, Shield, Clock, ArrowRight, Database, Lock, CloudOff } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';
import { useNavigate } from 'react-router-dom';

const MemoryVaultLanding = () => {
    const navigate = useNavigate();
    const navigateToUpload = () => {
        navigate('/memoryform');
    }
    const navigateToVault = () => {
        navigate('/card');
    }
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <header className="container mx-auto px-4 pt-20 pb-32 text-center">
        <div className="mb-8 inline-flex items-center rounded-full bg-blue-50 px-4 py-2">
          <Database className="mr-2 h-4 w-4 text-blue-500" />
          <span className="text-sm font-medium text-blue-600">Powered by Filecoin</span>
        </div>
        
        <h1 className="mb-6 text-5xl font-bold tracking-tight text-gray-900">
          Your Memories,{' '}
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Forever Secured
          </span>
        </h1>
        
        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
          Store your precious memories in a decentralized vault. Upload images, documents, 
          and videos with the security of blockchain technology and Filecoin storage.
        </p>
        
        <div className="flex justify-center gap-4">
          <Button size="lg" className="gap-2" onClick={navigateToUpload}>
            Start Uploading <ArrowRight className="h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="gap-2" onClick={navigateToVault}>
            My Vault
          </Button>
        </div>
      </header>

      {/* Feature Cards */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="transform transition-all hover:scale-105">
            <CardContent className="p-6">
              <div className="mb-4 inline-flex rounded-lg bg-blue-100 p-3">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Decentralized Security</h3>
              <p className="text-gray-600">
                Your data is encrypted and distributed across the Filecoin network, 
                ensuring maximum security and reliability.
              </p>
            </CardContent>
          </Card>

          <Card className="transform transition-all hover:scale-105">
            <CardContent className="p-6">
              <div className="mb-4 inline-flex rounded-lg bg-green-100 p-3">
                <HardDrive className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Permanent Storage</h3>
              <p className="text-gray-600">
                Never worry about losing your memories. Filecoin ensures your data 
                remains accessible for generations to come.
              </p>
            </CardContent>
          </Card>

          <Card className="transform transition-all hover:scale-105">
            <CardContent className="p-6">
              <div className="mb-4 inline-flex rounded-lg bg-purple-100 p-3">
                <CloudOff className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">No Central Point of Failure</h3>
              <p className="text-gray-600">
                Your memories don't depend on any single server or company. Access 
                them anywhere, anytime.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">How It Works</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-blue-100 p-4">
                  <Upload className="h-8 w-8 text-blue-600" />
                </div>
              </div>
              <h3 className="mb-2 text-xl font-semibold">1. Upload</h3>
              <p className="text-gray-600">
                Simply drag and drop your files into Memory Vault
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-blue-100 p-4">
                  <Lock className="h-8 w-8 text-blue-600" />
                </div>
              </div>
              <h3 className="mb-2 text-xl font-semibold">2. Secure</h3>
              <p className="text-gray-600">
                Files are encrypted and stored on the Filecoin network
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-blue-100 p-4">
                  <Clock className="h-8 w-8 text-blue-600" />
                </div>
              </div>
              <h3 className="mb-2 text-xl font-semibold">3. Access</h3>
              <p className="text-gray-600">
                Retrieve your memories anytime, anywhere
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 p-12 text-center text-white">
          <h2 className="mb-4 text-3xl font-bold">Start Preserving Your Memories Today</h2>
          <p className="mb-8 text-lg opacity-90">
            Join thousands of users who trust Memory Vault with their precious memories
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
            Get Started For Free
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© 2024 Memory Vault. Powered by Filecoin Network.</p>
        </div>
      </footer>
    </div>
  );
};

export default MemoryVaultLanding;