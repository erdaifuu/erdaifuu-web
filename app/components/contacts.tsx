import Image from 'next/image'

type ContactLinkProps = {
  href: string
  icon: string
  children: React.ReactNode
}

function ContactLink({ href, icon, children }: ContactLinkProps) {
  return (
    <div className="flex items-center gap-2 mb-2">
      <Image 
        src={icon} 
        alt="" 
        width={20} 
        height={20}
        className="flex-shrink-0"
      />
      <a 
        href={href}
        className="font-bold underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    </div>
  )
}

export function Contacts() {
  return (
    <div className="text-sm p-4">
      <ContactLink 
        href="mailto:erdaifuu@berkeley.edu"
        icon="/images/icons/envelope.svg"
      >
        erdaifuu@berkeley.edu
      </ContactLink>
      
      <ContactLink 
        href="https://github.com/erdaifuu"
        icon="/images/icons/github.svg"
      >
        erdaifuu
      </ContactLink>
      
      <ContactLink 
        href="https://signal.me/#eu/STt2iT58q81Bi6hV0ryuUNtCriXKRb-dRUHCBGsp_qV_zFqCEI9GzL1eMX54aRPK"
        icon="/images/icons/signal.svg"
      >
        erdaifuu.12
      </ContactLink>
      
      <ContactLink 
        href="https://discord.com/users/374502948249665538"
        icon="/images/icons/discord.svg"
      >
        erdaifuu
      </ContactLink>
    </div>
  )
}
