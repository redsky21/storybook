import React, { useState, useCallback, useMemo } from 'react';
import MuiPopover, { PopoverProps as MuiPopoverProps } from '@mui/material/Popover';

export type TPopoverProps = {
  align: 'left' | 'right' | 'center';
  renderTrigger: React.FunctionComponent<{ onClick: (e: React.MouseEvent<HTMLElement>) => void }>;
  children?: React.ReactNode;
  MuiPopoverProps?: Omit<MuiPopoverProps, 'open' | 'anchorEl'>;
};

export default function Popover({
  align = 'left',
  renderTrigger,
  children,
  MuiPopoverProps = {},
}: TPopoverProps) {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = useCallback((e) => setAnchorEl(e.currentTarget), []);
  const handleClose = useCallback(() => setAnchorEl(null), []);
  const TriggerEl = useMemo(() => renderTrigger, []);

  return (
    <>
      <TriggerEl onClick={handleClick} />
      <MuiPopover
        anchorOrigin={{ vertical: 'bottom', horizontal: align }}
        transformOrigin={{ vertical: 'top', horizontal: align }}
        {...MuiPopoverProps}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        sx={{
          '& .MuiPopover-paper': {
            marginTop: '1rem !important',
            borderRadius: '1rem !important',
            border: '1px solid rgba(0,0,0, 0.1) !important',
            boxShadow: '0 15px 20px rgba(0,0,0, 0.05) !important',
            backgroundColor: '#fff !important',
          },
        }}
      >
        {children}
      </MuiPopover>
    </>
  );
}
