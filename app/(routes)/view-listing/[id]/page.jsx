"use client";

import { supabase } from '@/utils/supabase/client';
import React, { useEffect, useState, use } from 'react';
import { toast } from 'sonner';
import Slider from '../_components/Slider';
import Details from '../_components/Details';

function ViewListing({ params }) {
  const { id } = use(params); // ✅ unwrap params with React.use()
  const [listingDetail, setListingDetail] = useState();

  useEffect(() => {
    const GetListingDetail = async () => {
      const { data, error } = await supabase
        .from('listing')
        .select('*,listingimages(url,listing_id)')
        .eq('id', id)
        .eq('active', true);

      if (data) {
        setListingDetail(data[0]);
        console.log(data);
      }
      if (error) {
        toast('Server side error');
      }
    };

    GetListingDetail();
  }, [id]);

  return (
    <div className='px-4 md:px-32 lg:px-56 py-5'>
      <Slider imageList={listingDetail?.listingimages} />
      <Details listingDetail={listingDetail} />
    </div>
  );
}

export default ViewListing;
