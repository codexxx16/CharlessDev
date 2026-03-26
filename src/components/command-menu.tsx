'use client'
import { CodeIcon, CommandIcon, LinkIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Fragment, useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command'
import { SOCIAL_LINKS } from '@/constants/navigation'
import { useCopyToClipboard } from '@/hooks/use-copy-to-clipboard'

type CommandAction = {
  title: string
  icon: React.ReactNode
  handleSelect: () => void | Promise<void>
}

type CommandGroup = {
  name: string
  actions: CommandAction[]
}

export function CommandMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [copy] = useCopyToClipboard()
  const t = useTranslations()

  function closeMenu() {
    setIsOpen(false)
  }

  function openMenu() {
    setIsOpen(true)
  }

  function toggleMenu() {
    setIsOpen((value) => !value)
  }

  function openExternalLink(url: string) {
    closeMenu()
    window.open(url, '_blank', 'noopener')
  }

  async function copyCurrentUrl() {
    closeMenu()
    await copy({ text: globalThis.location.href })
  }

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'k' && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        toggleMenu()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const generalActions: CommandAction[] = [
    {
      title: t('command-menu.actions.copy-link'),
      icon: <LinkIcon />,
      handleSelect: copyCurrentUrl,
    },
    {
      title: t('command-menu.actions.source-code'),
      icon: <CodeIcon />,
      handleSelect: () => {
        openExternalLink('https://github.com/codexxx16/CharlessDev')
      },
    },
  ]

  const socialActions: CommandAction[] = SOCIAL_LINKS.map((link) => ({
    title: link.title,
    icon: link.icon,
    handleSelect: () => {
      openExternalLink(link.href)
    },
  }))

  const groups: CommandGroup[] = [
    { name: t('common.labels.general'), actions: generalActions },
    { name: t('command-menu.groups.social'), actions: socialActions },
  ]

  return (
    <>
      <Button
        variant='ghost'
        size='icon'
        onClick={openMenu}
        aria-label={t('command-menu.open-menu')}
        data-testid='command-menu-button'
      >
        <CommandIcon />
      </Button>
      <CommandDialog open={isOpen} onOpenChange={setIsOpen}>
        <Command>
          <CommandInput placeholder={t('command-menu.placeholder')} />
          <CommandList>
            <CommandEmpty>{t('command-menu.no-results')}</CommandEmpty>
            {groups.map((group, index) => (
              <Fragment key={group.name}>
                <CommandGroup heading={group.name}>
                  {group.actions.map((action) => (
                    <CommandItem key={action.title} onSelect={action.handleSelect}>
                      {action.icon}
                      {action.title}
                    </CommandItem>
                  ))}
                </CommandGroup>
                {index === groups.length - 1 ? null : <CommandSeparator />}
              </Fragment>
            ))}
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  )
}
