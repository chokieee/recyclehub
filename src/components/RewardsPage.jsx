import React from 'react';
import Navbar from './Navbar';
import RewardProgram from './RewardProgram';

const RewardsPage = () => {
  return (
    <div>
      <Navbar showUserMenu={true} userName="Jane" />
      <div className="reward-redemption-header full-width-header">
        Reward Redemption
      </div>
      <main style={{ padding: '40px 8%', textAlign: 'center' }}>
        <h1>Redeem Your Rewards</h1>
        <p>Use your points to claim available rewards below:</p>
        <RewardProgram initialPoints={464} />
      </main>
    </div>
  );
};

export default RewardsPage;
