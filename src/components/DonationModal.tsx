import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Copy, ExternalLink, CreditCard, Building2, CheckCircle, Loader2 } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  amount?: string;
}

const DonationModal = ({ isOpen, onClose, amount }: DonationModalProps) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [isPayPalLoading, setIsPayPalLoading] = useState(false);
  const { toast } = useToast();

  const bankDetails = {
    accountNumber: "1011101249360",
    swiftCode: "EQBLUGKAXXX",
    bankName: "Equity Bank Uganda Ltd",
    accountName: "ELITE FOUNDATION"
  };

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      toast({
        title: "✅ Copied!",
        description: `${field} copied to clipboard`,
        variant: "default",
        duration: 3000
      });
      
      // Reset the copied state after 3 seconds
      setTimeout(() => {
        setCopiedField(null);
      }, 3000);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to copy to clipboard",
        variant: "destructive"
      });
    }
  };

  const handlePayPalDonation = () => {
    setIsPayPalLoading(true);
    const url = amount 
      ? `https://www.paypal.me/Fiona202283/${amount.replace('$', '')}`
      : "https://www.paypal.me/Fiona202283";
    
    // Simulate loading for better UX
    setTimeout(() => {
      window.open(url, '_blank', 'noopener,noreferrer');
      setIsPayPalLoading(false);
      onClose();
    }, 500);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center mb-2">
            Choose Your Donation Method
          </DialogTitle>
          <p className="text-gray-600 text-center">
            {amount ? `Donate ${amount}` : 'Make a donation'} to support vulnerable children worldwide
          </p>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* PayPal Option */}
          <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-blue-300 transition-all">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <CreditCard className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">PayPal</h3>
                <p className="text-sm text-gray-600">Quick & Secure</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4 text-sm">
              Donate securely using PayPal or credit/debit card. Instant processing.
            </p>
            <Button 
              onClick={handlePayPalDonation}
              disabled={isPayPalLoading}
              className="w-full bg-blue-600 hover:bg-blue-700"
            >
              {isPayPalLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Opening PayPal...
                </>
              ) : (
                <>
                  Donate with PayPal
                  <ExternalLink className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </div>

          {/* Bank Transfer Option */}
          <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-green-300 transition-all">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <Building2 className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Bank Transfer</h3>
                <p className="text-sm text-gray-600">International Wire</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4 text-sm">
              Direct bank transfer for larger donations. Processing takes 1-3 business days.
            </p>
            <div className="space-y-3">
              <div className="bg-gray-50 p-3 rounded-lg border">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Account Number</p>
                    <p className="font-mono font-semibold">{bankDetails.accountNumber}</p>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => copyToClipboard(bankDetails.accountNumber, "Account Number")}
                    className="h-8 w-8 p-0 hover:bg-green-100"
                  >
                    {copiedField === "Account Number" ? (
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>

              <div className="bg-gray-50 p-3 rounded-lg border">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">SWIFT Code</p>
                    <p className="font-mono font-semibold">{bankDetails.swiftCode}</p>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => copyToClipboard(bankDetails.swiftCode, "SWIFT Code")}
                    className="h-8 w-8 p-0 hover:bg-green-100"
                  >
                    {copiedField === "SWIFT Code" ? (
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>

              <div className="text-sm text-gray-600 space-y-1">
                <p><strong>Bank:</strong> {bankDetails.bankName}</p>
                <p><strong>Account Name:</strong> {bankDetails.accountName}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Banking Instructions */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="font-semibold text-blue-900 mb-2">International Wire Transfer Guide</h4>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• The SWIFT code identifies Equity Bank Uganda for international transfers</li>
            <li>• "XXX" in the code represents the specific branch identifier</li>
            <li>• "EQBLUGKA" identifies Equity Bank Uganda Ltd</li>
            <li>• Please include your name and "ELITE FOUNDATION DONATION" in the transfer reference</li>
            <li>• Transfer fees may apply depending on your bank</li>
          </ul>
        </div>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Having trouble? <a href="/contact" className="text-orange-600 hover:underline">Contact us</a> for assistance.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DonationModal;
