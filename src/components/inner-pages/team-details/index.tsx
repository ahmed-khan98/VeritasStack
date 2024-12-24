
import Breadcrumb from '@/components/common/breadcrumb/breadcrumb';
import HeaderTwo from '@/layout/headers/HeaderTwo';
import React from 'react';
import TeamDetailsArea from './TeamDetailsArea';
import TeamDetailsContactArea from './TeamDetailsContactArea';
import FooterOne from '@/layout/footers/FooterOne';

const TeamDetails = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <Breadcrumb top_title='Team Details' title='Team Details' />
        <TeamDetailsArea />
        <TeamDetailsContactArea />
      </main>
      <FooterOne />
    </>
  );
};

export default TeamDetails;