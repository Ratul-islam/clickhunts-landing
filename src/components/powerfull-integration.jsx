import "../css/powerfull.css"

const PowerfullIntegration = () => {
  return (
    <div class="powerContainer">
        <div class="powerHeader">
            <h1 class="title">Powerful Integrations</h1>
            <p class="subtitle">Connect your campaigns with industry-leading platforms and tools. ClickHunts seamlessly integrates with your favorite marketing stack to maximize performance.</p>
        </div>

        <div class="integration-grid">
            
            <div class="integration-card">
                <div class="icon-container flex justify-center items-center">
                    <svg className="w-[50%]" viewBox="0 0 24 24" fill="none" stroke="#048998" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M8 12h8"/>
                        <path d="M12 8v8"/>
                    </svg>
                </div>
                <h3 class="integration-title">Media Buying Platforms</h3>
                <ul class="integration-list">
                    <li class="integration-item">Meta Facebook Ads</li>
                    <li class="integration-item">Google Ads</li>
                    <li class="integration-item">TikTok Ads</li>
                    <li class="integration-item">Taboola Ads</li>
                    <li class="integration-item">Pinterest Ads</li>
                    <li class="integration-item">MGID Ads</li>
                </ul>
            </div>

            <div class="integration-card">
                <div class="icon-container flex justify-center items-center">
                    <svg className="w-[50%]" viewBox="0 0 24 24" fill="none" stroke="#048998" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="2" y="3" width="20" height="18" rx="2"/>
                        <path d="M4 11h16"/>
                    </svg>
                </div>
                <h3 class="integration-title">E-Commerce Solutions</h3>
                <ul class="integration-list">
                    <li class="integration-item">WooCommerce</li>
                    <li class="integration-item">Shopify</li>
                    <li class="integration-item">ClickFunnels</li>
                    <li class="integration-item">Stripe</li>
                </ul>
            </div>

            <div class="integration-card">
                <div class="icon-container flex justify-center items-center">
                    <svg className="w-[50%]" viewBox="0 0 24 24" fill="none" stroke="#048998" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 12h-8v8"/>
                        <path d="M3 3l18 18"/>
                    </svg>
                </div>
                <h3 class="integration-title">Tools & Analytics</h3>
                <ul class="integration-list">
                    <li class="integration-item">Hubspot CRM</li>
                    <li class="integration-item">IPQualityScore</li>
                    <li class="integration-item">Advanced Analytics</li>
                    <li class="integration-item">Campaign Tracking</li>
                </ul>
            </div>

            <div class="integration-card">
                <div class="icon-container flex justify-center items-center">
                    <svg className="w-[50%]" viewBox="0 0 24 24" fill="none" stroke="#048998" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                </div>
                <h3 class="integration-title">Performance Tracking</h3>
                <ul class="integration-list">
                    <li class="integration-item">Smart Traffic Optimization</li>
                    <li class="integration-item">Real-Time Performance Reports</li>
                    <li class="integration-item">Multi-Stage Rewards System</li>
                    <li class="integration-item">Partner Relationship Management</li>
                    <li class="integration-item">Advanced Tracking Solutions</li>
                </ul>
            </div>
        </div>

    </div>
  )
}

export default PowerfullIntegration