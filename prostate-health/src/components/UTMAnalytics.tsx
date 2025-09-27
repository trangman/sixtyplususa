'use client';

import { useState, useEffect } from 'react';
import { getCampaignSummary, getStoredCampaignData } from '../lib/utm-tracking';

interface UTMAnalyticsProps {
  className?: string;
}

export default function UTMAnalytics({ className = '' }: UTMAnalyticsProps) {
  const [campaignSummary, setCampaignSummary] = useState(getCampaignSummary());
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setCampaignSummary(getCampaignSummary());
  }, []);

  if (typeof window === 'undefined') return null;

  return (
    <div className={`fixed bottom-4 right-4 z-50 ${className}`}>
      {/* Toggle Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-colors"
        title="UTM Analytics"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      </button>

      {/* Analytics Panel */}
      {isVisible && (
        <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-xl border p-4 w-80 max-h-96 overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800">UTM Analytics</h3>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="space-y-3">
            {/* Campaign Summary */}
            <div>
              <h4 className="font-semibold text-gray-700 mb-2">Campaign Summary</h4>
              <div className="text-sm text-gray-600 space-y-1">
                <p>Total Campaigns: <span className="font-medium">{campaignSummary.totalCampaigns}</span></p>
                {campaignSummary.latestCampaign && (
                  <div className="mt-2 p-2 bg-gray-50 rounded">
                    <p className="font-medium">Latest Campaign:</p>
                    <p>Source: {campaignSummary.latestCampaign.source}</p>
                    <p>Medium: {campaignSummary.latestCampaign.medium}</p>
                    <p>Campaign: {campaignSummary.latestCampaign.campaign}</p>
                    {campaignSummary.latestCampaign.content && (
                      <p>Content: {campaignSummary.latestCampaign.content}</p>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Unique Sources */}
            {campaignSummary.uniqueSources.length > 0 && (
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Sources</h4>
                <div className="flex flex-wrap gap-1">
                  {campaignSummary.uniqueSources.map((source, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                      {source}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Unique Mediums */}
            {campaignSummary.uniqueMediums.length > 0 && (
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Mediums</h4>
                <div className="flex flex-wrap gap-1">
                  {campaignSummary.uniqueMediums.map((medium, index) => (
                    <span key={index} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                      {medium}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Unique Campaigns */}
            {campaignSummary.uniqueCampaigns.length > 0 && (
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Campaigns</h4>
                <div className="flex flex-wrap gap-1">
                  {campaignSummary.uniqueCampaigns.map((campaign, index) => (
                    <span key={index} className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">
                      {campaign}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Export Data Button */}
            <div className="pt-2 border-t">
              <button
                onClick={() => {
                  const data = getStoredCampaignData();
                  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.href = url;
                  a.download = `utm-campaigns-${new Date().toISOString().split('T')[0]}.json`;
                  document.body.appendChild(a);
                  a.click();
                  document.body.removeChild(a);
                  URL.revokeObjectURL(url);
                }}
                className="w-full bg-gray-600 hover:bg-gray-700 text-white text-sm py-2 px-3 rounded transition-colors"
              >
                Export Campaign Data
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
