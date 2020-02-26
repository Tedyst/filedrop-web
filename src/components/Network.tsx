import React from 'react';
import { useSelector } from 'react-redux';
import { AnimatePresence, motion } from 'framer-motion';

import { StateType } from '../reducers';
import NetworkTile from './NetworkTile';
import { animationPropsOpacity } from '../animationSettings';

interface NetworkProps {
    onSelect?: (clientId: string) => void,
};

const Network: React.FC<NetworkProps> = ({ onSelect }) => {
    const network = useSelector((store: StateType) => store.network);

    return (
        <div key="network" className={'subsection ' + ((network.length > 0) ? 'network' : '')}>
            <AnimatePresence>
                { network.length > 0 ?
                    <AnimatePresence>
                        { network.map((client) =>
                            <NetworkTile
                                key={client.clientId}
                                client={client}
                                onSelect={onSelect}
                            />
                        ) }
                    </AnimatePresence>
                :
                    <motion.span {...animationPropsOpacity}>
                        Nobody is connected to your network.
                    </motion.span>
                }
            </AnimatePresence>
        </div>
    );
}

export default Network;
